jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
jQuery.sap.require("sap.ui.test.opaQunit");
jQuery.sap.require("sap.ui.test.Opa5");

jQuery.sap.require("Workflow.test.integration.pages.Common");
jQuery.sap.require("Workflow.test.integration.pages.Worklist");
jQuery.sap.require("Workflow.test.integration.pages.Object");
jQuery.sap.require("Workflow.test.integration.pages.NotFound");
jQuery.sap.require("Workflow.test.integration.pages.Browser");
jQuery.sap.require("Workflow.test.integration.pages.App");

sap.ui.test.Opa5.extendConfig({
	arrangements: new Workflow.test.integration.pages.Common(),
	viewNamespace: "Workflow.view."
});

// Start the tests
jQuery.sap.require("Workflow.test.integration.WorklistJourney");
jQuery.sap.require("Workflow.test.integration.ObjectJourney");
jQuery.sap.require("Workflow.test.integration.NavigationJourney");
jQuery.sap.require("Workflow.test.integration.NotFoundJourney");
jQuery.sap.require("Workflow.test.integration.FLPIntegrationJourney");