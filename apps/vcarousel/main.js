/**
 * 수직방향 스크롤이 있는 Carousel 예제
 */
$class('tau.demo.VCarouselController').extend(tau.ui.SceneController).define({
  
  // scene파일을 따로 생성하지 않고 initScene함수를 오버라이드해서 scene을 생성한다.
  initScene: function () {
    var scene = this.getScene();
    var vCarousel = new tau.ui.Carousel({
      vertical: true // 수평방향 스크롤 설정.
    });
    var panel1 = new tau.ui.Panel({styles: {backgroundColor: 'red'}});
    var panel2 = new tau.ui.Panel({styles: {backgroundColor: 'blue'}});
    var panel3 = new tau.ui.Panel({
      styles: {backgroundColor: 'yellow'},
      components: [
        new tau.ui.Button({label: 'button1'})
      ]
    });
    
    vCarousel.setComponents([panel1, panel2, panel3]);
    
    scene.add(vCarousel);
  }
});
