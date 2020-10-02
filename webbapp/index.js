sap.ui.define([
	"sap/ui/core/mvc/XMLView"
	
	], function(XMLView)	{
		
		"use strict";
		
		// XMLView.create({
			
		// 	viewName:"sap.ui.Walkthrough.view.App"
		// }).then ( function(oView){
			
		// 	setTimeout(function(){ oView.placeAt("idBody"); }, 5000);
		// });
		
		
		// we can write above code like this also
		
		var oXMLView = new XMLView ({
			
			viewName:"sap.ui.Walkthrough.view.App"
		});
		
		oXMLView.placeAt("idBody");
		
		
		
		
	});
