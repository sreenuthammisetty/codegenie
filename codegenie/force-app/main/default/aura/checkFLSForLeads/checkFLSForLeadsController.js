({
	doInit : function(component, event, helper) {
		var action = component.get("c.LeadsList");
        
        action.setCallback(this, function(response){
            var state = response.getState();
            
            if(state === "SUCCESS"){
                console.table(response.getReturnValue());
            }
        });
        
        $A.enqueueAction(action);
        
	}
})