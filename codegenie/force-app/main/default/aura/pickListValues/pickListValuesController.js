({
	doInit : function(component, event, helper) {
		var action = component.get("c.getListValuesIntoList");
        action.setParams({
            objectType: component.get("v.sObjectName"),
            selectedField: component.get("v.fieldName")
        });
        
        action.setCallback(this, function(response){
            var list = response.getReturnValue();
            component.set("v.picklistValues", list);
        });
        
        $A.enqueueAction(action);
	}
})