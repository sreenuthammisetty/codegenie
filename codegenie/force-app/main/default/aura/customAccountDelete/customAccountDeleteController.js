({
	handleDelRecord : function(component, event, helper) {
		component.find("recordHandlerDelete").deleteRecord(
            $A.getCallback(function(delResult){
                if(delResult.state === "SUCCESS" || delResult.state === "DRAFT"){
                    console.log(delResult.state);
                    
                    var resultsToast = $A.get("e.force:showToast");
                    resultsToast.setParams({
                        "title": "Deleted",
                        "message": "The record is deleted.",
                        "type": "success",
                        "mode": "sticky"
                    });
                    resultsToast.fire();
                    
                    var homeEvent = $A.get("e.force:navigateToObjectHome");
                    homeEvent.setParams({
                        "scope": "Account"
                    });
                    homeEvent.fire();
                    
                }else if(delResult.state === "INCOMPLETE"){
                    console.log(delResult.state);
                }else if(delResult.state === "ERROR"){
                    console.log(delResult.state);
                }else{
                    console.log(delResult.state);
                }
                
            }));		
	}
})