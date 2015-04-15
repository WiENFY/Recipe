var ui = Ti.UI;
//Create the window
var window = ui.createWindow({
	backgroundColor: "#cccccc",
	layout: "vertical",
	orientation: "vertical"
});

//Create a view that holds everything
var mainView = ui.createView({
	top: 0, bottom: 0,
	width: "100%",
	backgroundColor: "#cccccc",
	layout: "vertical"
});

	//Create a label -- Recipe Card
	var headerLabel = ui.createLabel({
		color: "#000000",
		text: "Search",
		height: '10%',
		width: '100%',
		textAlign: "left",
		top: 5, left: 10,
		font:{
			fontSize: '55sp',
			fontWeight: 'bold'
		}
	});
	
	mainView.add(headerLabel);
	
	var searchView = ui.createView({
		top: 0,
		width: "100%",
		height: '50dp',
		backgroundColor: "#cccccc",
		layout: 'horizontal'
	});
	
	//Add our textSearchBox
	var searchBox = ui.createTextField({
		borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		color: "#000000",
		top: 10, right: 50, //Our padding
		width: "250sp",
		hintText: "Search for a recipe"
	});
	
	//TODO Add a click event that removes the text from the field on click
	
	searchView.add(searchBox);
	
	//Add a Find Button
	var searchButton = Titanium.UI.createButton({
		   title: 'Search',
		   top: 10,
		   width: ui.SIZE,
	});
	
	searchView.add(searchButton);
	
	mainView.add(searchView);
	//Create a view that holds Williams filter control
	var checklistView = ui.createView({
		top: 20,
		width: "100%",
		height: "20%",
		backgroundColor: "#cccccc",
		layout: 'vertical'
	});
	//Checklist	
	var chkGluten = Ti.UI.createSwitch({
		left: 5,
		style: Ti.UI.Android.SWITCH_STYLE_CHECKBOX,
		title: 'Gluten Free |',
		//color: '#000000'
	});
	checklistView.add(chkGluten);
	
	var chkPeanut = Ti.UI.createSwitch({
		left: 5,
		style: Ti.UI.Android.SWITCH_STYLE_CHECKBOX,
		title: 'Peanut Free |',
		//color: '#000000'
	});
	checklistView.add(chkPeanut);
	
	var chkLactose = Ti.UI.createSwitch({
		left: 5,
		style: Ti.UI.Android.SWITCH_STYLE_CHECKBOX,
		title: 'Lactose Free |',
		//color: '#000000'
	});
	checklistView.add(chkLactose);
	//filterView.add(williamsControl);

	mainView.add(checklistView);
	//Create a view that holds the ingredient list 
	var recipeView = ui.createView({
		bottom: 0,
		width: "100%",
		//height: "60%",
		backgroundColor: "#cccccc",
		borderColor: "#000000",
		layout: 'vertical'
	});
	
		//Create a table that holds the recipe information
		
		//First create the sections
		var sectionIngredient = Ti.UI.createTableViewSection({ headerTitle: 'Recipes' });
			//TODO Iterate through a list of data
			//TODO Sort the data using our search and filter tools
			
			//TODO Populate this area with the data
			
			//TODO Give each row an id
			
		var tableView = Ti.UI.createTableView({
		  data: [sectionIngredient],
		  height: "100%",
		  borderColor: "#cccccc"
		});
		
		//TODO create a click handler that will open a specific recipe given some id
		
		recipeView.add(tableView);
	
	mainView.add(recipeView);
	
window.add(mainView);

window.open();
