/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"com/pae/fi/cloco/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/pae/fi/cloco/test/integration/pages/Home",
	"com/pae/fi/cloco/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.pae.fi.cloco.view.",
		autoWait: true
	});
});