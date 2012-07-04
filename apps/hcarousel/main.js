/**
 * 수평방향 스크롤이 있는 Carousel 예제
 */
$class('tau.demo.HCarouselController').extend(tau.ui.SceneController).define({
  
  // scene파일을 따로 생성하지 않고 initScene함수를 오버라이드해서 scene을 생성한다.
  initScene: function () {
    var scene = this.getScene();
    var hCarousel = new tau.ui.Carousel({
      vertical: false // 설정하지 않아도 기본값은 수평방향임.
    });
    var panel1 = new tau.ui.Panel({styles: {backgroundColor: 'red'}});
    var panel2 = new tau.ui.Panel({styles: {backgroundColor: 'blue'}});
    var panel3 = new tau.ui.Panel({styles: {backgroundColor: 'yellow'}});
    
    hCarousel.setComponents([panel1, panel2, panel3]);
    
    scene.add(hCarousel);
  }
});
