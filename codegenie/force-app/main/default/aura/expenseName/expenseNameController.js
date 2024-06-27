({
	firstStep : function(component, event, helper) {
        
        console.log(component.get("v.expName"));
        
		//var updateEvent = component.getEvent("createFirstStep");
        var updateEvent = $A.get("e.c:expenseNameUpdate");
        
        updateEvent.setParams({"expName" : component.get("v.expName")});
        updateEvent.fire();
        
		
	}
})