({
	showme : function(component, event, helper) {
		var action=component.get("c.givedata");
        action.setCallback(this, function(response){
            var state = response.getState();
            if(state=='SUCCESS'){
                var res = response.getReturnValue();
                component.set("v.acc", res);
            }
        });
        $A.enqueueAction(action);
	}
})