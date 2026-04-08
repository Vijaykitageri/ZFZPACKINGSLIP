sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("zfzpackingslip.controller.View1", {
        onInit() {
            var that=this;
            this.setDefaultSettings();
            this.setHeaderModel();
        },
        setDefaultSettings:function(){
                var JsonMModel = new sap.ui.model.json.JSONModel({
                        "HeaderEditableFileds": true, 
                        "SaveBtn": "true"      
                })
                this.getView().setModel(JsonMModel, "LocalViewSettings");
        },
        setHeaderModel:function(){
               var JsonMModel = new sap.ui.model.json.JSONModel({
                        "HeaderEditableFileds": true, 
                        "SaveBtn": "true"      
                })
                this.getView().setModel(JsonMModel, "HeaderDataModel");
        },
        OnChangeOrderNo:function(oEvent){

        },
        OnChangeOrderNo:function(oEvent){

        },
        OnChangeOrderNo:function(oEvent){

        },
        OnChangeOrderNo:function(oEvent){

        },
        OnChangeOrderNo:function(oEvent){

        },
        OnChangeOrderNo:function(oEvent){

        },
        OnChangeOrderNo:function(oEvent){

        },
        OnChangeOrderNo:function(oEvent){

        },
        OnChangeOrderNo:function(oEvent){

        },
        OnChangeOrderNo:function(oEvent){

        },
        OnChangeOrderNo:function(oEvent){

        },
        OnChangeOrderNo:function(oEvent){

        },
        OnChangeOrderNo:function(oEvent){

        },
        OnChangeOrderNo:function(oEvent){

        },
        OnChangeOrderNo:function(oEvent){

        },
        OnChangeOrderNo:function(oEvent){

        },
        OnChangeOrderNo:function(oEvent){

        },
        OnChangeOrderNo:function(oEvent){

        },
        OnChangeOrderNo:function(oEvent){

        },
        OnChangeOrderNo:function(oEvent){

        },
        OnChangeOrderNo:function(oEvent){

        },
        OnChangeOrderNo:function(oEvent){

        },
        OnChangeOrderNo:function(oEvent){

        },
        OnChangeOrderNo:function(oEvent){

        },
        OnChangeOrderNo:function(oEvent){

        },
        onClickDisplay:function(){

        },
        onSave:function(){

        },
        onCancel:function(){

        },
        onReject:function(){

        },


    });
});