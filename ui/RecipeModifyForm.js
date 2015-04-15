function RecipeModifyForm()	{
	var createIngredient = require('Create Ingredient');
	 
	var self = Ti.UI.createWindow({
		backgroundColor: '#9999AA',
		//layout: 'vertical'
	});
	
	//Views
	var topView = Ti.UI.createView({
		top: 5,
		backgroundColor: '#9999AA',
		width: '100%',
		height: '50dp',
	});
	
	var inputR1 = Ti.UI.createView({
		top: '52dp',
		height: '20dp',
		width: Ti.UI.FILL,
		//layout: 'horizontal'
	});
	
	var inputR2 = Ti.UI.createView({
		top: '74dp',
		height: '40dp',
		width: Ti.UI.FILL,
		//layout: 'horizontal'
	});
	
	var inputR3 = Ti.UI.createView({
		top: '118dp',
		height: '20dp',
		width: Ti.UI.FILL,
		//layout: 'horizontal',	
	});
	
	var inputR4 = Ti.UI.createView({
		top: '140dp',
		height: '40',
		width: Ti.UI.FILL,
		//Layout: 'horizontal',
	});
	
	//Checklist
	var checklistView = Ti.UI.createView({
		top: '185dp',
		width: Ti.UI.Fill,
		height: '40',
		backgroundColor: '#557777',
		layout: 'horizontal'
	});
	
	var chkGluten = Ti.UI.createSwitch({
		style: Ti.UI.Android.SWITCH_STYLE_CHECKBOX,
		title: 'Gluten Free |',
		//color: '#000000'
	});
	checklistView.add(chkGluten);
	
	var chkPeanut = Ti.UI.createSwitch({
		style: Ti.UI.Android.SWITCH_STYLE_CHECKBOX,
		title: 'Peanut Free |',
		//color: '#000000'
	});
	checklistView.add(chkPeanut);
	
	var chkLactose = Ti.UI.createSwitch({
		style: Ti.UI.Android.SWITCH_STYLE_CHECKBOX,
		title: 'Lactose Free |',
		//color: '#000000'
	});
	checklistView.add(chkLactose);
	
	//Ingredient
	var ingredientView = Ti.UI.createView({
		top: '226dp',
		width: '100%'
	});
	
	var botView = Ti.UI.createView({
		bottom: 0,
		backgroundColor: '#9999AA',
		width: '100%',
		height: '50dp'
	});
	
	//Goods
	var txtName = Ti.UI.createTextField({
		left: 5,
		height: '98%',
		width: '70%',
		color: '#000000',
		backgroundColor: '#FFFFFF'
	});
	
	var measurementSwitch = Ti.UI.createSwitch({
		right: 5,
		height: '98%',
		width: '28%',
		value: true,
		titleOn: 'Standard',
		titleOff: 'Metric',		
	});
	measurementSwitch.addEventListener('change',function(e){
		setUnit(measurementSwitch.value, unitSwitch.value);
	});
	
	var txtServSize = Ti.UI.createTextField({
		right: 5,
		width: '10%',
		height: Ti.UI.FILL,
		backgroundColor: '#FFFFFF',
		borderColor: '#9999AA'
	});
	
	var txtIngredient = Ti.UI.createTextField({
		right: 370,
		width: '30%',
		height: Ti.UI.FILL,
		backgroundColor: '#FFFFFF',
		//borderColor: '#9999AA'
	});
	
	var txtAmt = Ti.UI.createTextField({
		right: 285,
		width: '10%',
		height: Ti.UI.FILL,
		backgroundColor: '#FFFFFF',
	});
	
	var unitSwitch = Ti.UI.createSwitch({
		right: 200,
		width: '13%',
		height: '98%',
		value: true,
		titleOn: 'Weight',
		titleOff: 'Volume'
	});
	unitSwitch.addEventListener('change', function(e){
		setUnit(measurementSwitch.value, unitSwitch.value);
	});
	
	var pkrUnit = Ti.UI.createPicker({
		right: 110,
		width: '13%',
		height: '70dp',
		backgroundColor: "#555588"
	});
	
	pkrUnit.clear = function(){
	    if(pkrUnit.columns[0]) {
	        var col = pkrUnit.columns[0];
	        var len = col.rowCount;
	            for(var x = len-1; x >= 0; x-- ){
	                    var row = col.rows[x];
	                    col.removeRow(row);
	            }
	    }
	};
	
	var unitData = [];
	setUnit(measurementSwitch.value, unitSwitch.value);
	
	function setUnit(measurement, unit){
		pkrUnit.clear();
		unitData = [];
		if(measurement){ //Standard
			unitData.push(Titanium.UI.createPickerRow({title: 'tsp'}));
			unitData.push(Titanium.UI.createPickerRow({title: 'Tbs'}));
			unitData.push(Titanium.UI.createPickerRow({title: 'Cup'}));
			
			if(!unit){ //Standard Volume
				unitData.push(Titanium.UI.createPickerRow({title: 'Oz'}));
				unitData.push(Titanium.UI.createPickerRow({title: 'Pt'}));
				unitData.push(Titanium.UI.createPickerRow({title: 'Qt'}));
				unitData.push(Titanium.UI.createPickerRow({title: 'Gal'}));
			} else { //Standard Weight
				unitData.push(Titanium.UI.createPickerRow({title: 'Lbs'}));
			}
		} else { //Metric
			if(!unit){ //Metric Volume
				unitData.push(Titanium.UI.createPickerRow({title: 'ML'}));
				unitData.push(Titanium.UI.createPickerRow({title: 'L'}));
				unitData.push(Titanium.UI.createPickerRow({title: 'KL'}));
			} else { //Metric Weight
				unitData.push(Titanium.UI.createPickerRow({title: 'MG'}));
				unitData.push(Titanium.UI.createPickerRow({title: 'G'}));
				unitData.push(Titanium.UI.createPickerRow({title: 'KG'}));
			}
		}
		pkrUnit.add(unitData);
	};
	
	function metricUnits(){
		pkrUnit.clear();
		unitData = [];

		pkrUnit.add(unitData);
	}
	
	var table = Ti.UI.createTableView({
		width:Ti.UI.FILL,
		height: Ti.UI.FILL,
		backgroundColor: '#CFCFCF',
		separatorColor: '#555588'
	});
	
	//Buttons
	var btnAdd = Ti.UI.createButton({
		title: 'ADD',
		right: 5,
		image: '/images/add_button.png',
		height: Ti.UI.FILL
	});
	btnAdd.addEventListener('click', function(e){
		//TODO add ingredient to table
	});
	
	var btnSave = Ti.UI.createButton({
		title: "Continue to steps",
		width: Ti.UI.FILL,
		height: Ti.UI.FILL,
	});
	
	btnSave.addEventListener('click', function(e){
		var CreateSteps = require('ui/CreateSteps');
		
		new CreateSteps().open();
	});
	
	//Build
	topView.add(txtName);
	topView.add(measurementSwitch);
	
	botView.add(btnSave);
	
	inputR1.add(Ti.UI.createLabel({left: 7, text: 'Name', width: '10%', height: Ti.UI.FILL, color: '#000000'}));
	inputR1.add(Ti.UI.createLabel({right: 25, text: 'Conversion Format', height: Ti.UI.FILL, color: '#000000'}));
	inputR2.add(Ti.UI.createLabel({right: 55, text: 'Serves:', width:'10%', height: Ti.UI.FILL, color: '#000000'}));
	inputR2.add(txtServSize);
	inputR3.add(Ti.UI.createLabel({right: 370, text: 'Ingredient', width:'30%', height: Ti.UI.FILL, color: '#000000'}));
	inputR3.add(Ti.UI.createLabel({right: 285, text: 'Amt', width:'10%', height: Ti.UI.FILL, color: '#000000'}));
	inputR3.add(Ti.UI.createLabel({right: 210, text: 'Unit', width:'10%', height: Ti.UI.FILL, color: '#000000'}));
	inputR3.add(Ti.UI.createLabel({right: 115, text: 'Unit Value', width:'10%', height: Ti.UI.FILL, color: '#000000'}));
	inputR4.add(txtIngredient);
	inputR4.add(txtAmt);
	inputR4.add(unitSwitch);
	inputR4.add(pkrUnit);
	inputR4.add(btnAdd);
	
	ingredientView.add(table);
	
	self.add(topView);
	
	self.add(inputR1);
	self.add(inputR2);
	self.add(inputR3);
	self.add(inputR4);
	self.add(checklistView);
	
	self.add(ingredientView);
	self.add(botView);
	
	return(self);
}
module.exports = RecipeModifyForm;
