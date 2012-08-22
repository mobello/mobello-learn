/**
 * Data Model for NoteApp
 */
$class('note.NoteModel').extend(tau.rt.EventDelegator).define({
	NoteModel: function () {
		this.ctx = tau.getCurrentContext();
		this.storage = this.ctx.getStorage('$data') || [];
		this.delta = [];
	},

	get: function (id) {
		var i, model = this.storage;
		for (i = 0, len = model.length; i < len; i++) {
			if (model[i].id === id) {
				return model[i];
			}
		}
		return (id === null) ? this.storage : null;
	},

	add: function (note) {
		this.storage.push(note);
		this._sync();
		this.delta.push({type: 'add', note: note});
	},
	
	remove: function (id) {
		var note = this.get(id);
		this.storage.splice(this.storage.indexOf(note), 1);
		this._sync();
		this.delta.push({type: 'remove', note: note});
	},
	
	update: function (note) {
		var old = this.get(note.id);
		this.storage[this.storage.indexOf(old)] = note;
		this._sync();
		this.delta.push({type: 'update', note: note});
	},
	
	_sync: function () {
		this.ctx.setStorage('$data', this.storage);
	},
	
	notifyDelta: function () {
	  while (this.delta.length > 0) {
	    this.fireEvent('modelchange', this.delta.shift());
	  }
	}
});

/**
 * DataStore manages singleton instance of NoteModel
 */
$class('note.DataStore').define({
	$static: {
		NOTE: new note.NoteModel()
	}
});
