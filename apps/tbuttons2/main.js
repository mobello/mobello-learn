/**
 * 타입 테마를 적용한 버튼 예제
 */
$class('tau.demo.TypeButtons2Controller').extend(tau.ui.SceneController).define({
  
  // scene파일을 따로 생성하지 않고 loadScene함수를 오버라이드해서 scene을 생성한다.
  loadScene: function () {
    var scene = this.getScene();
    
    var def = new tau.ui.Button({
      label: 'default',
      styleClass: {
        type: 'default'
      },
      styles: {width: '90%', margin: '.5em'}
    });
    var dark = new tau.ui.Button({
      label: 'dark',
      styleClass: {
        type: 'dark'
      },
      styles: {width: '90%', margin: '.5em'}
    });
     
    var red = new tau.ui.Button({
      label: 'red',
      styleClass: {
        type: 'red'
      },
      styles: {width: '90%', margin: '.5em'}
    });
     
    var khaki = new tau.ui.Button({
      label: 'khaki',
      styleClass: {
        type: 'khaki'
      },
      styles: {width: '90%', margin: '.5em'}
    });
     
    var green = new tau.ui.Button({
      label: 'green',
      styleClass: {
        type: 'green'
      },
      styles: {width: '90%', margin: '.5em'}
    });
    
    scene.setComponents([def, dark, red, khaki, green]);
  }
});