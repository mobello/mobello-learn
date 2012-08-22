function initScene() {
	var scene = this.getScene();
	var panel1 = new tau.ui.Panel({styles : {height: '429px', position: '', width: '100%'}});
	scene.add(panel1);
	var label1 = new tau.ui.Label({text : 'Narrative' , styles : {height: '18px', left: '19px', position: 'absolute', top: '68px', width: '69px'}});
	panel1.add(label1);
	var textField1 = new tau.ui.TextField({id : 'title' , styles : {height: '32px', left: '94px', position: 'absolute', top: '20px', width: '216px'}});
	panel1.add(textField1);
	var textArea1 = new tau.ui.TextArea({id : 'narrative' , styles : {height: '279px', left: '94px', position: 'absolute', top: '68px', width: '216px'}});
	panel1.add(textArea1);
	var label2 = new tau.ui.Label({text : 'Title*' , styles : {height: '18px', left: '19px', position: 'absolute', top: '20px', width: '69px'}});
	panel1.add(label2);
	var toolBar1 = new tau.ui.ToolBar({dock : 'bottom' , snap : true});
	scene.add(toolBar1);
	var space1 = new tau.ui.Space({styles : {width: '227px'}});
	toolBar1.add(space1);
	var button1 = new tau.ui.Button({id : 'write' , styleClass : {type: 'red'} , label : {disabled: 'Trash', normal: 'Trash'}});
	toolBar1.add(button1);
	button1.onEvent('tap', this.handleTrash, this);
}