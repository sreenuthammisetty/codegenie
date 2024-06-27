({
	doInit : function(component, event, helper) {
		component.find("forceRecord").getNewRecord(
            "Lead", 
            null,
            false,
            $A.getCallback(function(){
                var rec = component.get("v.leadRecord");
                var error = component.get("v.recordError");
                if(error || (rec === null)){
                    console.log("Error"+ Error);
                    return;
                }
                
                
            })
        );
	}
})