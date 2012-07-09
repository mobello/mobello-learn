/**
 * 상태에 따른 버튼 스타일 적용하기 예제
 */
$class('tau.demo.StatusButton2Controller').extend(tau.ui.SceneController).define({
  
  // scene파일을 따로 생성하지 않고 loadScene함수를 오버라이드해서 scene을 생성한다.
  loadScene: function () {
    var scene = this.getScene();
    // 현재 master버전은 상태별 스타일이 제대로 동작을 안합니다.
    // dev 버전은 해당 버그가 수정되었습니다.
    var button = new tau.ui.Button({ 
      textColor: {
        normal: 'Black',
        disabled: 'Gray',
        highlighted: 'Blue',
        selected: 'DarkBlue'
      },
      label: {
        normal: 'normal',
        disabled: 'disabled',
        highlighted: 'highlighted',
        selected: 'selected'
      },
      styles: {
        width: '50%',
        margin: '.5em'
      }
    });
    button.onEvent(tau.rt.Event.TAP, this.handleTap, this)    
    scene.add(button);
  },
  
  handleTap: function (e, payload) {
    var src = e.getSource();
    src.setDisabled(!src.isDisabled());
    window.setTimeout(function () { 
      src.setDisabled(false);
    }, 500);
  }
});