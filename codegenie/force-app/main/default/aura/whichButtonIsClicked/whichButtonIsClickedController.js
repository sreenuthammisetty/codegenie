({
	callYes : function(component, event, helper) {
        //helper.commonFunc(component, event);
        
        //component.set("v.message", event.getSource().get("v.label"));
        
        var action = component.get("c.whichButtonIsClickedMethod");
        
        action.setCallback(this, function(response){
            var state = response.getState();
            
            if(state === "SUCCESS"){
                console.log("Success");
                console.log(response.getReturnValue());
                
                component.set("v.message",response.getReturnValue());
            }else{
                console.log("Failed" + State);
            }
            
        });
        
        $A.enqueueAction(action);

		
	},
    callNo : function(component, event, helper){
        //helper.commonFunc(component, event);
        
        var action = component.get("c.noButtonIsClickedMethod");
        
        action.setCallback(this, function(response){
            var state = response.getState();
            
            if(state === "SUCCESS"){
                console.log("Success");
                console.log(response.getReturnValue());
                
                component.set("v.message",response.getReturnValue());
            }else{
                console.log("Failed" + State);
            }
            
        });
        
        $A.enqueueAction(action);
     
    }
})