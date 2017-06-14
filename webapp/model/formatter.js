sap.ui.define([], function() {
	"use strict";

	return {

		/**
		 * Rounds the number unit value to 2 digits
		 * @public
		 * @param {string} sValue the number string to be rounded
		 * @returns {string} sValue with 2 digits rounded
		 */
		numberUnit: function(sValue) {
			if (!sValue) {
				return "";
			}
			return parseFloat(sValue).toFixed(2);
		},

	formatPadding: function(sId){
			return String(sId).substring(0, 10);                        
		},
		/**
		 * Returns a configuration object for the {@link sap.ushell.ui.footerbar.AddBookMarkButton} "appData" property
		 * @public
		 * @param {string} sTitle the title for the "save as tile" dialog
		 * @returns {object} the configuration object
		 */
		shareTileData: function(sTitle) {
			return {
				title: sTitle
			};
		},
		//date time formatting
		
		formatDate: function(oDate){
			if(oDate){
				var oDateFormat = sap.ui.core.format.DateFormat.getDateInstance();
				return oDateFormat.format(oDate,1);
			}else{
				return oDate;
			}
		},

		
	iconType: function(iDays) {
				if(iDays<=5){
			 return "sap-icon://sys-enter-2";
				} else if (iDays > 5 && iDays <= 10) {
			return "sap-icon://error";
				}else{
			return "sap-icon://alert";
				}
			},
			
			statusType: function(iDays){
				if(iDays<=5){
			 return "Success";
				} else if (iDays > 5 && iDays <= 10) {
			return "Warning";
				}else{
			return "Error";
				}
			}

	};

});