function CreateSteps(){
	var ui = Ti.UI;
	//Create the window
	var window = ui.createWindow({
		backgroundColor: "#cccccc",
		layout: "vertical",
		orientation: "vertical"
	});
	
	//Create a panel - mainView
	var mainView = ui.createView({
		top: 0,
		width: "100%",
		height: "100%",
		backgroundColor: "#cccccc",
		layout: "vertical"
	});
	
		//Create a label -- Create Steps
		var headerLabel = ui.createLabel({
			color: "#000000",
			text: "Create Steps",
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
		//Create a panel -- StepsView
		var stepsView = ui.createView({
			top: 0,
			width: "100%",
			height: "50%",
			backgroundColor: "#cccccc",
			layout: 'vertical'
		});
			//Create a Label -- Step #
			var headerLabel = ui.createLabel({
				color: "#000000",
				text: "Step #", //TODO This could contain dynamic information
				height: ui.SIZE,
				textAlign: "center",
				top: "5%",
				font:{
					fontSize: '25sp',
					fontWeight: 'bold'
				}
			});
			
			stepsView.add(headerLabel);
			
			//Create a textField -- stepsArea
			var stepsArea = Ti.UI.createTextArea({
			  borderWidth: 2,
			  borderColor: '#000000',
			  borderRadius: 5,
			  color: '#000000',
			  font: {fontSize:20, fontWeight:'bold'},
			  keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD,
			  returnKeyType: Ti.UI.RETURNKEY_GO,
			  textAlign: 'left',
			  hintText: 'Enter step information here...',
			  top: 5,
			  width: '100%', height : '80%'
			});
			
			stepsView.add(stepsArea);
			
		mainView.add(stepsView);
			
		//Create a panel -- buttonView
		var buttonView = ui.createView({
			top: 0,
			width: "50%",
			height: "15%",
			backgroundColor: "#cccccc",
			layout: 'horizontal'
		});
		
			//Create a button -- nextButton
			var nextButton = Titanium.UI.createButton({
			   title: 'Next Step',
			   top: 5,
			   width: ui.SIZE,
			});
			
			buttonView.add(nextButton);
			//Create a button -- finishButton
			var finishButton = Titanium.UI.createButton({
			   title: 'Finish',
			   top: 5,
			   width: ui.SIZE,
			});
			
			buttonView.add(finishButton);
		
		mainView.add(buttonView);
		
	window.add(mainView);
	
	//window.open();
	return window;
}
module.exports = CreateSteps;
