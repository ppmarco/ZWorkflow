sap.ui.define([
	"Workflow/controller/BaseController"
], function(BaseController) {
	"use strict";

	return BaseController.extend("Workflow.controller.NotFound", {

		/**
		 * Navigates to the worklist when the link is pressed
		 * @public
		 */
		onLinkPressed: function() {
			this.getRouter().navTo("worklist");
		}

	});

});