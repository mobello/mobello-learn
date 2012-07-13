$class('sample.BubbleController').extend(tau.ui.SceneController).define({
   
  loadScene: function () {
    var scene = this.getScene();
    var targetPanel = new tau.ui.Panel({
      id: 'targetPanel',
      styles: {
        width: '100%',
        height : '200px',
        backgroundColor: 'black'         
      }
    });
    var colorPanel = new tau.ui.ScrollPanel({
      id : 'colorPanel',
      styles: {        
        width: '100%',
        height: '280px',
        backgroundColor: 'gray',
        border: '1px solid gray'
      }
    });
     
    colorPanel.onEvent(tau.rt.Event.TAP, this.changePanelBackgroundColor, this);
    var btnArray = [
                    {id: 'blue', label: 'Blue Color'},
                    {id: 'red', label: 'Red Color'},
                    {id: 'white', label: 'Blue Color'},
                    {id: 'orange', label: 'Orange Color'},
                    {id: 'green', label: 'Green Color'},
                    {id: 'lime', label: 'Lime Color'},
                   ];
    for ( var int = 0; int < btnArray.length; int++) {
      colorPanel.add(
          new tau.ui.Button({
            id : btnArray[int].id,
            label : btnArray[int].label,
            styles: {height: '50px',width: '100%'}
          })
      );
    }
    var resetButton = new tau.ui.Button({
      id : 'reset',
      label: 'Reset', 
      styles: {height: '50px',width: '100%', backgroundColor: 'red'}
    });
    //리셋버튼의 이벤트 핸들러를 등록한다.
    resetButton.onEvent(tau.rt.Event.TAP, this.resetTargetPanel, this, false);
    colorPanel.add(resetButton);
    scene.add(targetPanel);
    scene.add(colorPanel);
  },
  
  changePanelBackgroundColor: function (event, payload) {
    //리셋 버튼이 Tap 될 경우 changePanelBackgroundColor함수는 호출되지 않는다.
    var id = event._source.getId();
    var color = null;
    switch (id) {
    case 'red':
      color = 'red';
      break;
    case 'blue':
      color = 'blue';
      break;
    case 'white':
      color = 'white';
      break;
    case 'orange':
      color = 'orange';
      break;
    case 'green':
      color = 'green';
      break;
    case 'lime':
      color = 'lime';
      break;
    default: 
      return;
    }   
     
    var scene = this.getScene();
    var targetPanel = scene.getComponent('targetPanel');
     
    targetPanel.setStyle('backgroundColor', color);
  },
  //리센버튼 이벤트핸들러 함수
  resetTargetPanel: function (event, payload) {
    //event.alwaysBubble();
    that = this; //confirm 컴포넌트의 callbackFn 함수에서 쓰기 위해서 
    tau.confirm("Do you want to reset?", {
      title: 'Reset', 
      callbackFn: function(returnVal){
    //confirm 컴포넌트에서 ok를 tap할 경우 returnVal가 true이다.
        if (returnVal) {
          var scene = that.getScene();
      //targetPanel을 가져온다.
          var targetPanel = scene.getComponent('targetPanel');          
          targetPanel.setStyle('backgroundColor', 'black');          
        }
      }
    });
  }
   
});