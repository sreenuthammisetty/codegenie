({
	fireUpModal : function(component, event, helper) {
		
        var modalPopUp = component.find("dailogId");
        //$A.util.toggleClass
        $A.util.addClass(modalPopUp, 'slds-fade-in-open');
        var overlayPopUp = component.find("overlayId");
        $A.util.addClass(overlayPopUp, 'slds-backdrop_open');
	}
})