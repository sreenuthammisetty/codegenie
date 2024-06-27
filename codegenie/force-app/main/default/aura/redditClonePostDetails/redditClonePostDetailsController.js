({
	fetchPostWithComments : function(component, event, helper) {
        
        var action = component.get("c.grabTheRecId");
        var temp = component.get("v.recordIdFromCmp");
        console.log(temp);
        action.setCallback(this, function(response){
           var state = response.getReturnValue();
            if(state === "SUCCESS"){
                console.log(state);
            }
            
        });
        
        $A.enqueueAction(action);
        

	}
})