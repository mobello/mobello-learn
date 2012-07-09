/**
 * 외부 데이터 가져오는 테이블 예제
 */
$require('http://www.google.com/jsapi');
$class('tau.demo.DynamicTableController').extend(tau.ui.SceneController).define({
  
  $static: {
    EVENT_LIB_LOADED: 'googleLibLoaded'
  },
  
  init: function () {
    this.data = [];
    this.feed;
  },
  
  // scene파일을 따로 생성하지 않고 loadScene함수를 오버라이드해서 scene을 생성한다.
  loadScene: function () {
    var scene = this.getScene();
    var table = new tau.ui.Table({id: 'table'});
    
    scene.add(table);
    
    table.onEvent(tau.ui.Table.EVENT_MODEL_LOAD, this.handleModelLoad, this);
    table.onEvent(tau.ui.Table.EVENT_CELL_LOAD, this.handleCellLoad, this);
  },
  
  // scene이 로드가 완료되면 데이터를 로드한다.
  sceneLoaded: function () {
    var scene = this.getScene();
    var table = scene.getComponent('table');
    
    // google rss feed libraray가 로딩이 완료되면 호출되는 콜백함수
    function onLoad () {
      table.loadModel();
    }
    google.load("feeds", "1", {"callback": onLoad});
  },
  
  // 외부에서 데이터를 가져온다.
  handleModelLoad: function (e, payload) {
    var table = e.getSource();
    var start = payload.start;
    var size = payload.size;
    var len = start + size;
    
    // 데이터를 가져오는 로직
    if (!this.feed) {
      this.feed = new google.feeds.Feed("http://mobileblog.olleh.com/rss");

      function feedLoaded(result) {
        if (!result.error && result.feed) {
          var entries = result.feed.entries;
          this.data = this.data.concat(entries);
          table.addNumOfCells(entries ? entries.length : 0);
        }
      }
    }
    // size만큼 데이터를 가져온다.
    this.feed.setNumEntries(size); 
    this.feed.load(tau.ctxAware(feedLoaded, this));
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