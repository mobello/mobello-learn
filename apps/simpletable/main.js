/**
 * 하위에 셀을 가지고 있는 간단한 테이블 예제
 */
$class('tau.demo.SimpleTableController').extend(tau.ui.SceneController).define({
  
  // scene파일을 따로 생성하지 않고 initScene함수를 오버라이드해서 scene을 생성한다.
  initScene: function () {
    var scene = this.getScene();
    var table = new tau.ui.Table({
      components: [
        new tau.ui.TableCell({title: 'list1'}),
        new tau.ui.TableCell({title: 'list2'}),
        new tau.ui.TableCell({title: 'list3'})
      ]
    });
    scene.add(table);
  }
});
