/**
 * 커스텀 컴포넌트 예제 예제
 */
$require('/custom.js');
$class('tau.demo.Custom1Controller').extend(tau.ui.SceneController).define({
  
  // scene파일을 따로 생성하지 않고 loadScene함수를 오버라이드해서 scene을 생성한다.
  loadScene: function () {
    var scene = this.getScene();
    var star = new custom.Star();
    scene.add(star);
  }
});