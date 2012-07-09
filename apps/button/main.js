/**
 * 상태에 따른 버튼 스타일 적용하기 예제
 */
$class('tau.demo.StatusButtonController').extend(tau.ui.SceneController).define({
  
  // scene파일을 따로 생성하지 않고 loadScene함수를 오버라이드해서 scene을 생성한다.
  loadScene: function () {
    var scene = this.getScene();
    var button = new tau.ui.Button({
      id: 'btn1',
      label: 'normal',
      styles: {
        width: '50%',
        margin: '.5em'
      }
    });
    button.onEvent(tau.rt.Event.TOUCHSTART, this.handleTouchStart, this);
    button.onEvent(tau.rt.Event.TAP, this.handleTap, this)    
    scene.add(button);
  },
  
  handleTouchStart: function (e, payload) {
    var src = e.getSource();
    src.setLabel('touchStart');
  },
   
  handleTap: function (e, payload) {
    var src = e.getSource();
    src.setLabel('tap');
   
    window.setTimeout(function () { 
      src.setLabel('normal');
    }, 500);
  }
});