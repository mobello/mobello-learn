/**
 * 외부 데이터 가져오는 테이블 예제
 */
$class('tau.demo.DynamicTableController').extend(tau.ui.SceneController).define({
  
  init: function () {
    this.data = [];
  },
  
  // scene파일을 따로 생성하지 않고 loadScene함수를 오버라이드해서 scene을 생성한다.
  loadScene: function () {
    var scene = this.getScene();
    var table = new tau.ui.Table({id: 'table', moreCell: true});
    
    table.onEvent(tau.ui.Table.EVENT_MODEL_LOAD, this.handleModelLoad, this);
    table.onEvent(tau.ui.Table.EVENT_CELL_LOAD, this.handleCellLoad, this);
    
    scene.add(table);
  },
  
  // scene이 로드가 완료되면 데이터를 로드한다.
  sceneLoaded: function () {
    var scene = this.getScene();
    var table = scene.getComponent('table');
    
    table.loadModel();
  },
  
  handleModelLoad: function (e, payload) {
    var table = e.getSource();
    var start = payload.start;
    var size = payload.size;
    var len = start + size;
    
    // 데이터를 가져오는 로직 시작
    for(var i = start; i < len; i++) {
      this.data[i] = {title: i + ' title'}
    }
    // 데이터를 가져오는 로직 끝
    
    table.addNumOfCells(size); 
  },
  
  handleCellLoad: function (e, payload) {
    var table = e.getSource();
    var index = payload.index;
    var offset = payload.offset;
    var data = this.data[index + offset];
    var tableCell = new tau.ui.TableCell({title: data.title});
    
    table.add(tableCell);
  }
});
