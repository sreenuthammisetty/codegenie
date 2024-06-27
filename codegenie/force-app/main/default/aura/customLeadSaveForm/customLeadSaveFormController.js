({
	clickCreate : function(component, event, helper) {
        
        var lead = component.get("v.newLead");
        console.log(lead);
        var action = component.get("c.saveLead");
        
        action.setParams({
            "leadParams": lead
        });
        
        action.setCallback(this, function(response){
            var state = response.getState();
            
            if(state === "SUCCESS"){
                console.log(response.getReturnValue());
            }else{
                console.log("Failure"+state)
            }
            
        });
        
        $A.enqueueAction(action);
        
        
		
	}
})