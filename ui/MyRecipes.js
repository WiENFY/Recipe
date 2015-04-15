function MyRecipes(){
	var self = Ti.UI.createWindow({
		backgroundColor: '#9999AA',
		layout: 'vertical'
	});
	
	//Views
	var topView = Ti.UI.createView({
		top: 0,
		width: '100%',
		height: '10%',
		backgroundColor: '#9999AA'
	});
	
	var botView = Ti.UI.createView({
		bottom: 0,
		width: '100%',
		height: '10%',
		layout: 'horizontal',
		backgroundColor: '#9999AA'
	});
	
	
	var lblTop = Ti.UI.createLabel({
		color: '#404040',
		text: 'MY RECIPES',
		height: Ti.UI.SIZE,
		textAlign: 'center',
		verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
		font:{
			fontSize: '25sp',
			fontWeight: 'bold'
		}
	});
	
	
	var table = Ti.UI.createTableView({
		width:'98%',
		height: '80%',
		backgroundColor: '#CFCFCF',
		separatorColor: '555588'
	});
	
	//Buttons
	var btnEdit = Ti.UI.createButton({
		title: 'EDIT',
		width: '50%',
		height: Ti.UI.FILL
	});
	
	// btnEdit.addEventListener('click', function(e){
	// //RecipeModifyView with info
	// });
	
	var btnAdd = Ti.UI.createButton({
		title: 'ADD NEW',
		width: '50%',
		height: Ti.UI.FILL
	});
	
	btnAdd.addEventListener('click', function(e){
		var RecipeModifyForm = require('ui/RecipeModifyForm');
		
		new RecipeModifyForm().open();
	});
	
	//Build
	topView.add(lblTop);
	
	botView.add(btnEdit);
	botView.add(btnAdd);
	
	self.add(topView);
	self.add(table);
	self.add(botView);
	
	//self.open();
	return self;
}
module.exports = MyRecipes;
