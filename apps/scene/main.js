
$class('tau.sample.ctrl.SceneCtrl').extend(tau.ui.SceneController).define({
 
  init: function () {
    console.log("init call!!");
  },
 
  sceneLoaded: function () {
    console.log("sceneloaded call!!");
    var scene = this.getScene();
    var button = new tau.ui.Button({
      id: 'sceneLoadedButton',
      label: 'Tell Me!'  
    }); 
    scene.add(button);
  },
 
  sceneDrawn: function () {
    console.log("sceneDrawn call!!");
  }
});