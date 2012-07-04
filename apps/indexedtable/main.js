/**
 * 그룹핑 테이블 예제
 */
$class('tau.demo.IndexedTableController').extend(tau.ui.SceneController).define({
  
  // scene파일을 따로 생성하지 않고 initScene함수를 오버라이드해서 scene을 생성한다.
  initScene: function () {
    var scene = this.getScene();
    var indexTable = new tau.ui.Table({
      group: true,
      indexBar: tau.ui.Table.INDEXBAR_EN
    });
    
    indexTable.add(new tau.ui.TableCell({title: 'apple', groupName: 'A'}));
    indexTable.add(new tau.ui.TableCell({title: 'avocado', groupName: 'A'}));
    indexTable.add(new tau.ui.TableSection({groupName: 'B'}));
    indexTable.add(new tau.ui.TableCell({title: 'banana', groupName: 'B'}));
    indexTable.add(new tau.ui.TableCell({title: 'blueberry', groupName: 'B'}));
    indexTable.add(new tau.ui.TableCell({title: 'blackberry', groupName: 'B'}));
    indexTable.add(new tau.ui.TableSection({groupName: 'C'}));
    indexTable.add(new tau.ui.TableSection({groupName: 'D'}));
    indexTable.add(new tau.ui.TableSection({groupName: 'E'}));
    indexTable.add(new tau.ui.TableSection({groupName: 'F'}));
    indexTable.add(new tau.ui.TableSection({groupName: 'G'}));
    indexTable.add(new tau.ui.TableSection({groupName: 'H'}));
    indexTable.add(new tau.ui.TableSection({groupName: 'I'}));
    indexTable.add(new tau.ui.TableCell({title: 'orange', groupName: 'O'}));
    scene.add(indexTable);
  }
});
