/**
 * 끌어당겼다가 놓기 테이블 예제
 */
$class('tau.demo.PullToRefreshTableController').extend(tau.ui.SceneController).define({
  
  // scene파일을 따로 생성하지 않고 loadScene함수를 오버라이드해서 scene을 생성한다.
  loadScene: function () {
    var scene = this.getScene();
    var table = new tau.ui.Table({
      id: 'table',
      components: [
        new tau.ui.TableCell({title: '2 cell'}),
        new tau.ui.TableCell({title: '1 cell'}),
        new tau.ui.TableCell({title: '0 cell'}),
      ],
      pullToRefresh: 'down',  // 'both' | 'down' | 'up'
      pullDownFn: tau.ctxAware(this.loadModel, this)  // 끌어다 놓았을 때 발생하는 콜백함수를 설정한다.
    });
    
    table.onEvent(tau.ui.Table.EVENT_MODEL_LOAD, this.handleModelLoad, this);
    table.onEvent(tau.ui.Table.EVENT_CELL_LOAD, this.handleCellLoad, this);
    scene.add(table);
    
  },
  
  loadModel: function () {
    var scene = this.getScene();
    var table = scene.getComponent('table');
    table.loadModel();
  },
  
  handleModelLoad: function (e, payload) {
    var table = e.getSource();
    var size = payload.size;
    table.addNumOfCells(size);
  },
   
  handleCellLoad: function (e, payload) {
    var table = e.getSource();
    var index = payload.index;
    var offset = payload.offset;
    var tableCell = new tau.ui.TableCell({title: (index + offset) + ' cell'});
    table.add(tableCell, 0); // 첫번째 인덱스에 추가되도록 한다.
  }
});