$class('tau.sample.ani1.SceneCtrl').extend(tau.ui.SceneController).define({
  
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
    
    var ani = new tau.fx.Animation({
    from : {'background': 'red'},
    to : {'background': 'yellow', 'width' : '300px', 'height': '200px'}
    }, {
      timingFunction : 'ease-out',
      duration : 4000,
      override : true,
      iterationCount : 2,
      delay : 0
      });
    ani.animate(Button1.getDOM());
    
  }
});