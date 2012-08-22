function initScene() {
	var scene = this.getScene();
	var table1 = new tau.ui.Table({group : true , id : 'notes'});
	scene.add(table1);
	table1.onEvent('selectChange', this.propagateEvent, this);
}