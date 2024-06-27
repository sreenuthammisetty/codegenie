({
	recordUpdateHandler : function(component, event, helper) {
        var evtParams = event.getParams();
        
        if(evtParams.changeType === "CHANGED"){
            var changdeFields = evtParams.changedFields;
            
            console.log(JSON.stringify(changdeFields));
            var resultsToast = $A.get("e.force:showToast");
            resultsToast.setParams({
                "title": "Updated",
                "message": "The record is updated"
            });
            resultsToast.fire();
            
        }else if(evtParams.changeType === "LOADED"){
            console.log("Loaded");
        }else if(evtParams.changeType === "REMOVED"){
            console.log("Removed");
        }else if(evtParams.changeType === "ERROR"){
            console.log("There is an error");
        }
        
		
	}
})