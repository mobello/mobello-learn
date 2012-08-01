/**
 * 커스텀 컴포넌트 예제 예제
 */
$class('tau.demo.StarRatingController').extend(tau.ui.SceneController).define({
  
  // scene파일을 따로 생성하지 않고 loadScene함수를 오버라이드해서 scene을 생성한다.
  loadScene: function () {
    var scene = this.getScene();
    var starRating = new custom.RatingBar({
      numStars: 3
    });
    scene.add(starRating);
  }
});


$class('custom.RatingBar').extend(tau.ui.Component).mixin(tau.ui.Container).define({

  RatingBar: function () {
    this._value = 0;
    this._numStars = 5;
     
    this.$optionize = tau.mixin(this.$optionize, {
      handler: {
        numStars: function (prop, val) {
          this._numStars = val;
        }
      }
    }, 'remix');
    this.onEvent('selected', this.handleSelected, this);
  },
  
  getValue: function () {
    return this._value;
  },
   
  setValue: function (value) {
    this._value = value;
  },
  
  beforeRender: function (refresh) {
    for(var i=0; i < this._numStars; i++) {
      this.add(new custom.Star());
    }
  },
  
  render: function (refresh) {
    this.drawComponents(refresh);
  },
  

  handleSelected: function (e, payload) {
    var src = e.getSource();
    var index = this.indexOf(src)[0];
    var comps = this.getComponents();
    var value = 0;
    var old = this.getValue();
   
    for(var i=0; i < index; i++) {
      comps[i].setValue(1);
      value = value + 1;
    }
    for(var i = index + 1; i < old; i++) {
      comps[i].setValue(0);
    }
    value = value + comps[index].getValue();
    this.setValue(value);
  }
});

$class('custom.Star').extend(tau.ui.Button).define({
  $static: {
    RIGHT_KEY: 'right',
    LEFT_KEY: 'left'
  },
  
  Star: function () {
  },
  
  getValue: function () {
    return this._val;
  },
   
  setValue: function (val) {
    if (!tau.isNumber(val) && val !== 0 && val !== .5 && val !== 1)
      throw new RangeError('val is out of range: ', val, this.currentStack());
    this._val = val;
    this.renderer.updateValue(this.$renderData, val);
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
    var hit = e.changedTouches[0];
    var result = this.renderer.getElemPropertyName(this.$renderData, hit.target);
    var value = custom.Star.RIGHT_KEY === result ? .5 : 1;
     
    this.setValue(value);
    this.fireEvent('selected', value);
  }
});

custom.Star.prototype.renderer = tau.mixin({
  $base: 'custom-star',
  
  $styleClass: {
    right: 'right',
    left: 'left',
    halfSelected: 'half-selected',
    selected: 'selected'
  },
  

  _template: [
    '<div class=${base}>',
      '<div class=${left}></div>',
      '<div class=${right}></div>',
    '</div>'
  ],
  
  _initializeDOM: function ($dom, $base, root) {
    $dom[tau.ui.ROOT_KEY] = root;
    $dom[custom.Star.RIGHT_KEY] = root.childNodes[0];
    $dom[custom.Star.LEFT_KEY] = root.childNodes[1];
  },
  
  updateValue: function ($renderData, value) {
    var $dom = $renderData.$dom;
    var root = $dom[tau.ui.ROOT_KEY];
    if (value == .5) {
      tau.util.dom.replaceClass(root, this.$styleClass.selected, this.$styleClass.halfSelected);
    } else if (value == 1) {
      tau.util.dom.replaceClass(root, this.$styleClass.halfSelected, this.$styleClass.selected);
    } else {
      tau.util.dom.removeClass(root, this.$styleClass.selected);
      tau.util.dom.removeClass(root, this.$styleClass.halfSelected);
    }
  }
}, custom.Star.$super.renderer);