$class('tau.sample.ani.SceneCtrl').extend(tau.ui.SceneController).define({
  
  loadScene: function () {
    var scene = this.getScene();
    var button = new tau.ui.Button({
      label : 'animate'      
    });
    button.onEvent(tau.rt.Event.TAP, this.handleTap, this);
    
    var Button1 = new tau.ui.Button({
      id : 'Button1',
      label : 'Button1'
    });
   
    scene.add(button);
    scene.add(Button1);
  },
 
  handleTap: function () {
    var scene = this.getScene();    
    var Button1 = scene.getComponent('Button1');
    
    /** Transition **/   
    var tran = new tau.fx.Transition({duration: "1000ms"});
    tran.setStyle("width", "150px");
    tran.setStyle("height","200px",{timingFunction : "cubic-bezier(0, 1, 0, 1)", duration: "1500ms"});
    tran.setStyle("color","red",{timingFunction : "ease-out", duration: "1500ms"});
    tran.setStyle("margin","20px",{timingFunction : "ease-out", duration: "1500ms"});
    tran.setStyle("padding","20px",{timingFunction : "ease-in", duration: "1500ms"});
    tran.animate(Button1.getDOM());
  }
});