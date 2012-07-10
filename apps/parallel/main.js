$class('tau.sample.ctrl.ParallelNavi').extend(tau.ui.ParallelNavigator).define({
 
  init: function () {
    console.log("ParallelNavi: initCall!!");
    this.setTitle("parallel~");
    //두개의 SceneController를 생성하여 ParallelNavigator에 설정한다.
    this.setControllers([new tau.sample.ctrl.SceneCtrl(),new tau.sample.ctrl.SceneCtrl2()]);
  },
 
});
$class('tau.sample.ctrl.SceneCtrl').extend(tau.ui.SceneController).define({
 
  SceneCtrl: function () {
    this.setTitle("Scene1");
  },
  init: function () {
    console.log("SceneCtrl: init call!!");    
   },
 
  loadScene: function () { 
    console.log("SceneCtrl: loadScene call!!"); 
    var scene = this.getScene(); 
    var button = new tau.ui.Button({ 
      id: 'button', 
      label: 'Tap Me!' 
    });
    //이벤트 핸들러 등록
    button.onEvent(tau.rt.Event.TAP, this.handleTap, this); 
    scene.add(button); 
  },
 
  sceneLoaded: function () { 
    console.log("SceneCtrl: sceneloaded call!!"); 
  },
 
  sceneDrawn: function () { 
    console.log("SceneCtrl: sceneDrawn call!!"); 
  },
 
  handleTap: function () {
    //SceneCtrl의 상위 controller인 ParallelNavigator을 가져온다.
    var parallelNavi = this.getParent();
    //setIndex함수를 이용하여 화면을 이동시킨다.
    parallelNavi.setIndex(1); 
  }
 
});
 
 
 
 
$class('tau.sample.ctrl.SceneCtrl2').extend(tau.ui.SceneController).define({
 
  SceneCtrl2: function () {
    this.setTitle("Scene2");
  },
  
  init: function () { 
    console.log("SceneCtrl2: init call!!"); 
    this.setTitle("Scene2"); 
  },   
 
  loadScene: function () {
    console.log("SceneCtrl2: loadScene call!!"); 
    var scene = this.getScene(); 
    var button = new tau.ui.Button({ 
      id: 'button', 
      label: 'Tap Me2!' 
    });
    button.onEvent(tau.rt.Event.TAP, this.handleTap, this); 
    scene.add(button);
  },
    
  sceneLoaded: function () { 
    console.log("SceneCtrl2: sceneloaded call!!"); 
  }, 
    
  sceneDrawn: function () { 
    console.log("SceneCtrl2: sceneDrawn call!!"); 
  },
 
  handleTap: function () {
    //SceneCtrl의 상위 controller인 ParallelNavigator을 가져온다.
    var parallelNavi = this.getParent();
    //setIndex함수를 이용하여 화면을 이동시킨다.
    parallelNavi.setIndex(0);
  }
});