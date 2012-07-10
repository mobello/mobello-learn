$class('tau.sample.ctrl.SeqNavi').extend(tau.ui.SequenceNavigator).define({

  init : function() {
    console.log("SeqNavi: initCall!!");
    this.setTitle("seq~");
    this.setRootController(new tau.sample.ctrl.SceneCtrl());
  }
});

$class('tau.sample.ctrl.SceneCtrl').extend(tau.ui.SceneController).define({
  init : function() {
    console.log("SceneCtrl: init call!!");
    this.setTitle("Scene1~");
  },

  loadScene : function() {
    console.log("SceneCtrl: loadScene call!!");
    var scene = this.getScene();
    var button = new tau.ui.Button({
      id : 'button',
      label : 'Tap Me!'
    });

    button.onEvent(tau.rt.Event.TAP, this.handleTap, this);
    scene.add(button);
  },

  sceneLoaded : function() {
    console.log("SceneCtrl: sceneloaded call!!");
  },

  sceneDrawn : function() {
    console.log("SceneCtrl: sceneDrawn call!!");
  },

  handleTap : function() {
    var scene = this.getScene();
    var button = scene.getComponent('button');
    //this는 현재 SceneCtrl를 가르키다, sceneCtrl의 parent는 SequenceNavigator이다.
    var seqNavi = this.getParent(); 
  //SequenceNavigator의 화면이동이 SceneCtrl2로 이동한다.
    seqNavi.pushController(new tau.sample.ctrl.SceneCtrl2()); 
  }

});

$class('tau.sample.ctrl.SceneCtrl2').extend(tau.ui.SceneController).define({

  init : function() {
    console.log("SceneCtrl2: init call!!");
    this.setTitle("Scene2~");
  },

  loadScene : function() {
    console.log("SceneCtrl2: loadScene call!!");
    var scene = this.getScene();
    var button = new tau.ui.Button({
      id : 'button',
      label : 'Tap Me2!'
    });

    button.onEvent(tau.rt.Event.TAP, this.handleTap, this);
    scene.add(button);
  },

  sceneLoaded : function() {
    console.log("SceneCtrl2: sceneloaded call!!");
  },

  sceneDrawn : function() {
    console.log("SceneCtrl2: sceneDrawn call!!");
  },

  destroy : function() {
    console.log("SceneCtrl2: destory call!!");
  },

  handleTap : function() {
    var scene = this.getScene();
    var button = scene.getComponent('button');
    var seqNavi = this.getParent();
    seqNavi.popController();
  }

});