/**
 * 모양 테마를 적용한 버튼 예제
 */
$class('tau.demo.ShapeButtonsController').extend(tau.ui.SceneController).define({
  
  // scene파일을 따로 생성하지 않고 loadScene함수를 오버라이드해서 scene을 생성한다.
  loadScene: function () {
    var scene = this.getScene();
    
    var rectangle = new tau.ui.Button({
      label: 'rectangle',
      styleClass: {
        shape: 'rectangle'
      },
      styles: {width: '90%', margin: '.5em'}
    });
    var round = new tau.ui.Button({
      label: 'round',
      styleClass: {
        shape: 'round'
      },
      styles: {width: '90%', margin: '.5em'}
    });
    var corner = new tau.ui.Button({
      label: 'corner',
      styleClass: {
        shape: 'corner'
      },
      styles: {width: '90%', margin: '.5em'}
    });
    
    scene.setComponents([rectangle, round, corner]);
  }
});