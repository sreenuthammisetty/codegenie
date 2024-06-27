({
	handleSaveRecord : function(component, event, helper) {
        
        component.find("record").saveRecord($A.getCallback(function(saveResult){
            if(saveResult.state === "SUCCESS" || saveResult.state === "DRAFT"){
                console.log("Save completed successfully");
                
                var resultsToast = $A.get("e.force:showToast");
                resultsToast.setParams({
                    'title': 'Saved',
                    'message': 'The record is saved.'
                });
                
                resultsToast.fire();
                
            }else if(saveResult.state === "INCOMPLETE"){
                console.log("User is offline, device doesnt support drafts.");
            }else if(saveResult.state === "ERROR"){
                console.log("Problem saving record");
                console.log(JSON.stringify(saveResult.error));
            }else{
                console.log('Unknown problem, state:' + saveResult.state + ', error: '+ JSON.stringify(saveResult.error));
            }
        })); }
})