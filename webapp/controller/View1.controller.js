sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast", "sap/ui/model/json/JSONModel", "sap/ui/model/resource/ResourceModel"],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, MessageToast, JSONModel, ResourceModel) {
    "use strict";

    return Controller.extend("project1.controller.View1", {
      onInit: function () {
        var oData = {
          recipient: {
            name: "World"
          }
        };
        var oModel = new JSONModel(oData);
        this.getView().setModel(oModel);
        var i18nModel = new ResourceModel({
          bundleName: "project1/i18n/i18n"
        });
        this.getView().setModel(i18nModel, "i18n")
      },
      onClick: function () {
        var oBundle = this.getView().getModel("i18n").getResourceBundle();
        var sRecipient = this.getView().getModel().getProperty("/recipient/name");
        var sMsg = oBundle.getText("helloMsg", [sRecipient]);
        MessageToast.show(sMsg);
      },

    });
  }
);
