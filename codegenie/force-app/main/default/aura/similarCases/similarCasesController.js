({
	doInit : function(component, event, helper) {
        var spinner = component.find("spinner");
        $A.util.removeClass(spinner, "slds-hide");
        var action = component.get("c.getSimilarCaseRecords");
        
        action.setParams({
            status: component.get("v.case.fields.Status.value"),
            //priority: component.get("v.casePriority")
        });
        
        action.setCallback(this, function(response){
           var similarCases = response.getReturnValue(); 
           component.set("v.similarCases", similarCases); 
           $A.util.addClass(spinner, "slds-hide");
        });
        
        $A.enqueueAction(action);
		
	}
})