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

$class('custom.Star').extend(tau.ui.Component).define({
  
  Star: function () {
    this.setStyles({
      width: '50px',
      height: '50px',
      backgroundSize: 'cover',
      backgroundColor: 'transparent',
      backgroundImage: 'url(http://upload.wikimedia.org/wikipedia/commons/b/b0/Star-.svg)',
      backgroundRepeat: 'no-repeat'
    });
  },

  /**
   * @param {tau.rt.Event} e Event 인스턴스
   * @param {Object} payload 이벤트를 통해 전달되는 데이터 객체 
   * @override
   */
  handleTouchStart: function (e, payload) {
    this.setStyle('background-image', 'url(http://upload.wikimedia.org/wikipedia/commons/b/b5/Star%C2%BD.svg)');
  },

  /**
   * @param {tau.rt.Event} e Event 인스턴스
   * @param {Object} payload 이벤트를 통해 전달되는 데이터 객체 
   * @override
   */
  handleTap: function (e, payload) {
    this.setStyle('background-image', 'url(http://upload.wikimedia.org/wikipedia/commons/6/63/Star%2A.svg)');
    this.fireEvent('selected');
  },
  
  getValue: function () {
    return this._val;
  },
   
  setValue: function (val) {
    if (!tau.isNumber(val) && val !== 0 && val !== .5 && val !== 1)
      throw new RangeError('val is out of range: ', val, this.currentStack());
    this._val = val;
  }
});