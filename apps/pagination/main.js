/**
 * Pagination 테이블 예제
 */
$class('tau.demo.PaginationTableController').extend(tau.ui.SceneController).define({
  
  // scene파일을 따로 생성하지 않고 loadScene함수를 오버라이드해서 scene을 생성한다.
  loadScene: function () {
    var scene = this.getScene();
    var table = new tau.ui.Table({
      pagination: {
        type: tau.ui.PaginationBar.SLIDER_TYPE,
        listSize: 5,
        dock: tau.ui.PaginationBar.TOP_DOCK // default는 tau.ui.PaginationBar.BOTTOM_DOCK
      }
    });
    table.onEvent(tau.ui.Table.EVENT_CELL_LOAD, this.handleCellLoad, this);
    table.addNumOfCells(100);
    scene.add(table);
  },
  
  handleCellLoad: function (e, payload) {
    var table = e.getSource();
    var index = payload.index;
    var offset = payload.offset;
    var tableCell = new tau.ui.TableCell({title: (index + offset) + ' cell'});
    table.add(tableCell); // 첫번째 인덱스에 추가되도록 한다.
  }
});