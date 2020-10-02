sap.ui.define([
	
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel"
	
	],
	
	function(UIComponent,JSONModel,ResourceModel){
		"use strict";
		return UIComponent.extend("sap.ui.Walkthrough.Component",{
			
			// metadata:{
			// 	rootView:{
			// 		"viewName":"sap.ui.Walkthrough.view.App",
			// 	     "type":"XML",
			// 	     "async":true,
			// 	     "id":"app"  	}
				     
				     
				      metadata : {
            manifest: "json"
      },
		
			init:function(){
				
				UIComponent.prototype.init.apply(this,arguments);
				
			var oModel = {
			
			button:{
				name:"Display Button"
			}
			
		};
		var Model = new JSONModel(oModel);
		this.setModel(Model);
		
		var i18nModel = new ResourceModel ({
			bundleName:"sap.ui.Walkthrough.i18n.i18n"
			
		});
		
		this.setModel(i18nModel,"i18Model");
				
			}
			
		});
	});