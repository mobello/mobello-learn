$require('/model.js');

/**
 * navigation based application main controller
 */
$class('note.MainController').extend(tau.ui.SequenceNavigator).define({

  init: function () {
    this.setRootController(new note.ListController());
    this.onEvent(tau.rt.Event.TAP, this.handleBtnTap, this);
    this.onEvent(tau.rt.Event.SELECTCHANGE, this.handleCellTap, this);
    this.onEvent(tau.rt.Event.RT_CTRL_CHANGE, function () {
      note.DataStore.NOTE.notifyDelta();
    }, this);
  },

  handleBtnTap: function (e, payload) {
    var src = e.getSource();
    if (src instanceof tau.ui.Button) {
      var label = src.getLabel();
      if (label === 'New') {
        this.pushController(new note.WriteController());
      } else { // (label === 'Save' || label === 'Trash')
        this.popController();
      }
    }
  },

  handleCellTap: function (e, payload) {
    var id = payload.current.getId();
    this.pushController(new note.WriteController(id));
  }
});

/**
 * 
 */
$class('note.ListController').extend(tau.ui.SceneController).define({
  init: function () {
    var nav, btn;
    this.setTitle('My Notes');
    nav = this.getNavigationBar();
    nav.setBackButtonText('Home');
    btn = new tau.ui.Button({
      label: 'New',
      styleClass: {
        type: 'blue'
      }
    });
    btn.onEvent(tau.rt.Event.TAP, this.propagateEvent, this);
    nav.setRightItem(btn);
    note.DataStore.NOTE
        .onEvent('modelchange', this.handleModelChange, this);
  },

  sceneLoaded: function () {
    var i, cell, 
        list = this.getScene().getComponent('notes'), 
        notes = note.DataStore.NOTE.get(null);
    for (i = 0, len = notes.length; i < len; i++) {
      cell = this._newCellWith(notes[i]);
      list.add(cell);
    }
  },

  _newCellWith: function (note) {
    var cell = new tau.ui.TableCell({ id: note.id });
    cell.setTitle(note.title);
    cell.setSubTitle(note.narrative);
    cell.setRightItem(new tau.ui.ImageView({
      src: '/arrow.png',
      styles: {
        width: '25px',
        height: '20px'
      }
    }));
    cell.setGroupName(note.date);
    return cell;
  },
 
  handleModelChange: function (e, payload) {
    var section, cell, 
        scene = this.getScene(), 
        list = scene.getComponent('notes'),
        note = payload.note;
    switch (payload.type) {
    case 'add' :
      list.add(this._newCellWith(note));
      scene.update();
      break;
    case 'remove' :
      section = list.getTableSectionFromGroupName(note.date);
      section.remove(section.getComponent(note.id), true);
      if (section.getComponents().length == 0) {
        list.remove(section, true);
      }
      break;
    case 'update' :
      cell = list.getComponent(note.id);
      cell.setTitle(note.title);
      cell.setSubTitle(note.narrative);
      break;
    }
  }
});

/**
 * 
 */
$class('note.WriteController').extend(tau.ui.SceneController).define({

  WriteController: function (id) {
    this.id = id;
  },

  init: function () {
    var nav, btn;
    this.setTitle('Edit Note');
    nav = this.getNavigationBar();
    btn = new tau.ui.Button({
      label: 'Save',
      styleClass: {
        type: 'blue'
      }
    });
    btn.onEvent(tau.rt.Event.TAP, this.handleSave, this);
    nav.setRightItem(btn);
  },

  sceneLoaded: function () {
    var item, scene = this.getScene();
    if (this.id) {
      item = note.DataStore.NOTE.get(this.id);
      scene.getComponent('title').setText(item.title);
      scene.getComponent('narrative').setText(item.narrative);
    } else {
      scene.getComponent('write').setDisabled(true);
    }
  },

  handleSave: function (e, payload) {
    var date = new Date(), 
        scene = this.getScene(),
        item = {
          id: this.id || '' + date.getTime(),
          title: scene.getComponent('title').getText(),
          narrative: scene.getComponent('narrative').getText(),
          date: date.toDateString()
        };
    if (item.title.length == 0) {
      tau.alert('Please enter a title for this note.', {
        title: 'Alert'
      });
      return;
    }
    if (this.id) {
      note.DataStore.NOTE.update(item);
    } else {
      note.DataStore.NOTE.add(item);
    }
    this.propagateEvent(e, payload);
  },

  handleTrash: function (e, payload) {
    var that = this, id = this.id;
    function trashIt (result) {
      if (!result)
        return;
      note.DataStore.NOTE.remove(id);
      that.propagateEvent(e, payload);
    }
    if (!id)
      return;

    tau.confirm('Aure you sure to delete?', {
      title: 'Confirm',
      callbackFn: trashIt
    });
  }
});