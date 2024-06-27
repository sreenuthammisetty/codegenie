({
	clickMeHandler : function(component, event, helper) {
		var cmp = component.getEvent("findoutEvents");
        cmp.setParams({
            "messageEvent": "This is the param passing dynamically"
        });
		cmp.fire();
	},
    
    applicationEventHandler : function(component, event, helper) {
        var appEvent = $A.get("e.c:exploreAppEvent");
        appEvent.setParams({
            "appMesasge": "An Application event fired me."
        });
		appEvent.fire();
    }
})