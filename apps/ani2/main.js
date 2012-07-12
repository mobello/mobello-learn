$class('tau.sample.ani2.SceneCtrl').extend(tau.ui.SceneController).define({
  
  loadScene: function () {
    var scene = this.getScene();
    var button = new tau.ui.Button({
      label : 'animate'      
    });
    button.onEvent(tau.rt.Event.TAP, this.handleTap, this);
    
    var Button1 = new tau.ui.Button({
      id : 'Button1',
      label : 'Button1',
      styles : {'display' : 'none'}
    });
    var Button2 = new tau.ui.Button({
      id : 'Button2',
      label : 'Button2'
    });

    scene.add(button);
    scene.add(Button1);
    scene.add(Button2);
   
  },
 
  handleTap: function () {
    var scene = this.getScene();    
    var Button1 = scene.getComponent('Button1');
    var Button2 = scene.getComponent('Button2');
   
    
    tau.fx.fadeIn(Button1.getDOM(),{duration : 500});
    tau.fx.fadeOut(Button2.getDOM(),{duration :'1s'});
  }
  
  
});