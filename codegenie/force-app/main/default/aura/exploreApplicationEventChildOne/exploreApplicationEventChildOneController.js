({
	applicationEventHandler : function(component, event, helper) {
        var appEvent = $A.get("e.c:exploreApplicationEvent");
		
        appEvent.setParams({
            "appMessage": "An Application Event is Fired ..."
        });
        appEvent.fire();
	}
})