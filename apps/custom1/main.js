/**
 * 커스텀 컴포넌트 예제 예제
 */
$class('tau.demo.Custom1Controller').extend(tau.ui.SceneController).define({
  
  // scene파일을 따로 생성하지 않고 loadScene함수를 오버라이드해서 scene을 생성한다.
  loadScene: function () {
    var scene = this.getScene();
    var star = new custom.Star();
    scene.add(star);
  }
});

$class('custom.Star').extend(tau.ui.Button).define({
  
  Star: function () {
    this.setStyles({
      width: '50px',
      height: '50px',
      backgroundImage: 'url(/star.png)'
    });
  },

  /**
   * 이벤트 {@link tau.rt.Event.TAP} 처리 함수
   * <p/>
   * {@link tau.rt.EventDelegator#propagateEvent} 내부에서 해당 이벤트가 오면
   * 선처리하는 함수이다. 사용자가 직접 호출하면 안된다.
   * <p/>
   * 이벤트 {@link tau.rt.Event.TAP}를 처리하기 위해서는 오버라이드해야한다.
   * @param {tau.rt.Event} e Event 인스턴스
   * @param {Object} payload 이벤트를 통해 전달되는 데이터 객체 
   * @override
   */
  handleTap: function (e, payload) {
    this.setSelected(true);
    this.fireEvent('selected');
  },
  
  /**
   * 사용하지 않게 처리한다.
   * @override
   */
  setLabel: tau.emptyFn,
  /**
   * 사용하지 않게 처리한다.
   * @override
   */
  setTextColor: tau.emptyFn
  
});