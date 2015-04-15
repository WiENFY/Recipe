var ui = Ti.UI;
//Create the window
var window = ui.createWindow({
	backgroundColor: "#cccccc",
	layout: "vertical",
	orientation: "vertical"
});

//Create a view that holds everything
var mainView = ui.createView({
	top: 0,
	width: "100%",
	height: "100%",
	backgroundColor: "#cccccc",
	layout: "vertical"
});

	//Create a label -- Recipe Card
	var headerLabel = ui.createLabel({
		color: "#000000",
		text: "Recipe Card",
		height: '10%',
		width: '100%',
		textAlign: "left",
		top: "5%", left: 10,
		font:{
			fontSize: '55sp',
			fontWeight: 'bold'
		}
	});
	
	mainView.add(headerLabel);
	//Create a view that holds Williams Recipe Serves control
	var servesView = ui.createView({
		top: 0,
		width: "100%",
		height: "10%",
		backgroundColor: "#cccccc",
		layout: 'vertical'
	});
		//William's Recipe Serves control will go here
		
		//servesView.add(williamsControl);

	mainView.add(servesView);
	//Create a view that holds the ingredient list 
	var stepsView = ui.createView({
		top: 0,
		width: "100%",
		height: "60%",
		backgroundColor: "#cccccc",
		borderColor: "#000000",
		layout: 'vertical'
	});
	
		//Create a table that holds the recipe information
		
		//First create the sections
		var sectionIngredient = Ti.UI.createTableViewSection({ headerTitle: 'Ingredients' });
			//Iterate through a list of ingredients
			//Each ingredient creates two things:
				//Its own row
				//Its own printable string variable of Ingredient + Amount + Value
			
		var tableView = Ti.UI.createTableView({
		  data: [sectionIngredient],
		  height: "100%",
		  borderColor: "#cccccc"
		});
		
		
		stepsView.add(tableView);
	
	mainView.add(stepsView);

	var buttonView = ui.createView({
		top: 0,
		width: "100%",
		backgroundColor: "#cccccc",
		borderColor: "#000000",
		layout: 'vertical'
	});	
	
	var nextButton = Titanium.UI.createButton({
		   title: 'Play',
		   top: 5,
		   width: ui.SIZE,
		});
	
	buttonView.add(nextButton);
	
	mainView.add(buttonView);
	
window.add(mainView);

window.open();		
		
		
