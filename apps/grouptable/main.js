/**
 * 그룹핑 테이블 예제
 */
$class('tau.demo.GroupTableController').extend(tau.ui.SceneController).define({
  
  // scene파일을 따로 생성하지 않고 initScene함수를 오버라이드해서 scene을 생성한다.
  initScene: function () {
    var scene = this.getScene();
    var groupTable = new tau.ui.Table({
      group: true
    });
    
    groupTable.add(new tau.ui.TableCell({title: 'apple', groupName: 'A'}));
    groupTable.add(new tau.ui.TableCell({title: 'avocado', groupName: 'A'}));
    groupTable.add(new tau.ui.TableSection({groupName: 'B'}));
    groupTable.add(new tau.ui.TableCell({title: 'banana', groupName: 'B'}));

    scene.add(groupTable);
  }
});
