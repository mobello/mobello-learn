$class('sample.CapturingController').extend(tau.ui.SceneController).define({
   
  loadScene: function () {
    var scene = this.getScene();
    //버튼을 생성하는 추가 버튼
    var createButton = new tau.ui.Button({
      id : 'create',
      label: 'Add Button', 
      styles: {height: '50px',width: '100%', backgroundColor: 'lime'}
    });
    //Tap되었을때 삭제되는 버튼을 추가하는 이벤트 핸들러를 등록한다.
    createButton.onEvent(tau.rt.Event.TAP, this.createButton, this);
    //삭제되는 버튼들의 패널
    var buttonPanel = new tau.ui.ScrollPanel({
      id : 'buttonPanel',
      styles: {        
        width: '100%',
        height: '100%',
        backgroundColor: 'gray'        
      }
    });
    //삭제 버튼이 Tap되었을때 버튼을 삭제하는  이벤트 핸들러를 등록한다.
    //네번째 파라미터를 ture를 설정하여 캡쳐링때 동작한다.
    buttonPanel.onEvent(tau.rt.Event.TAP, this.removeButton, this, true);
     
    var button1 = new tau.ui.Button({
      label: 'remove', 
      styles: {height: '50px',width: '160px'}
    });
     
    var button2 = new tau.ui.Button({
      label: 'remove', 
      styles: {height: '50px',width: '160px'}
    });
     
    buttonPanel.add(button1);
    buttonPanel.add(button2);
    scene.add(createButton);
    scene.add(buttonPanel);
  },
  
  //Tap 되었을 때 삭제하는 이벤트 핸들러 
  removeButton: function (event, payload) {
    //실제적으로 Tap 된 컴포넌트를 가져온다.
    var target = event._source;
    //Tap된 컴포넌트가 버튼인지 체크한다.
    if (target instanceof tau.ui.Button){
      //버튼 컴포넌트를 삭제한다.
      target.destroy();
    }
     
  },
  //추가 버튼이 Tap 되었을 때 버튼을 추가하는 이벤트 핸들러
  createButton: function (event, payload) {
    //버튼을 생성한다.
    var button = new tau.ui.Button({
      label: 'remove', 
      styles: {height: '50px',width: '160px'}
    })
    //Scene을 가져온다.
    var scene = this.getScene();
    //삭제 버튼을 가지고있는 패널을 가져온다.
    var panel = scene.getComponent('buttonPanel');
    //패널에 버튼을 추가한다.
    panel.add(button);
    //새롭게 추가된 컴포넌트를 화면에 나타내기 위해서 scene을 업데이트 한다.
    scene.update();
  }
   
});