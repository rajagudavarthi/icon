sap.ui.define([
	"sap/ui/core/mvc/Controller"
	 //"sap/m/MessageToast",
	 //"sap/ui/model/json/JSONModel",
	 //"sap/ui/model/resource/ResourceModel"
	
	], function(Controller,MessageToast,JSONModel,ResourceModel){
		"use strict";
		
	Controller.extend("sap.ui.Walkthrough.controller.App",	{


	// onInit: function(){
	// 	var oModel = {
			
	// 		button:{
	// 			name:"Display Button"
	// 		}
			
	// 	};
		
	// 	var model = new JSONModel(oModel);
	// 	var view = this.getView();
		
	// 	view.setModel(model);
	// 	// this.getView().setModel(model);
		
		
	// 	var i18nModel = new ResourceModel({
			
	// 		bundleName:"sap.ui.Walkthrough.i18n.i18n"
	// 	});
		
	// 	this.getView().setModel(i18nModel,"i18n");
		
		
		
	// },
	// onBtnPress: function(){
		
	// 	// var MessageToast = sap.ui.require("sap/m/MessageToast");
		
	//       //MessageToast.show("MessageToast controler");
	       
	//       //MessageToast.show ("MessageToast Display");
	       
	//       //sap.m.MessageToast.show("MessageToast Display");
	       
	//       var oBundle = this.getView().getModel("i18n").getResourceBundle();
	//       var oButton = this.getView().getModel().getProperty("/button/name");
	//       var oMToast = oBundle.getText("FirstObject",[oButton]);
	     
	//       MessageToast.show(oMToast);
	   
	
	// }
	});	
		
		
		
	});