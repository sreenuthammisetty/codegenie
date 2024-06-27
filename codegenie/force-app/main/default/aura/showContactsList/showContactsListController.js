({
	doInit : function(component, event, helper) {
		
        var action = component.get("c.getContacts");
        
        action.setCallback(this, function(response){
            var state = response.getState();
            if(state === "SUCCESS"){
                console.log("Sucess "+response.getReturnValue());
            }else{
                console.log("Failed"+ state);
            }
            
        });
        
        $A.enqueueAction(action);
	}
})