/**
 * 타입 테마를 적용한 버튼 예제
 */
$class('tau.demo.TypeButtonsController').extend(tau.ui.SceneController).define({
  
  // scene파일을 따로 생성하지 않고 loadScene함수를 오버라이드해서 scene을 생성한다.
  loadScene: function () {
    var scene = this.getScene();
    
    var normal = new tau.ui.Button({
      label: 'normal',
      styleClass: {
        type: 'normal'
      },
      styles: {width: '90%', margin: '.5em'}
    });
    var def = new tau.ui.Button({
      label: 'default',
      styleClass: {
        type: 'default'
      },
      styles: {width: '90%', margin: '.5em'}
    });
    
    scene.setComponents([normal, def]);
  }
});