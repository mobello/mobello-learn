/**
 * 커스텀 컴포넌트 예제 예제
 */
$require("https://raw.github.com/mobello/mobello-learn/master/apps/custom2/main.js");
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