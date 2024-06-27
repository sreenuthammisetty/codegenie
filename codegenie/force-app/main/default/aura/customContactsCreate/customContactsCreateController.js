({
	doInit : function(component, event, helper) {
		
        component.find("contactRecord").getNewRecord(
        		"Contact", //SObject
            	null,  //recordTypeId
            	false, // Skip Cache
    			
  		        $A.getCallback(function(){
                
                	var rec = component.get("v.newContactCreate"); 
                    var error = component.get("v.newContactError");
            		
            		if(error || (rec === null)){
            			console.log("Error initializing record template");
			        }else{
                        console.log("Record template is initialized" + rec.sobjectType);
                    }
                                    
				}));
	        
        
        
	},
    
    handlesaveFun: function(component, event, helper){
        
        //Perform Validations
        
        component.set("v.simpleNewContact.AccountId", component.get("v.recordId"));
        component.find("contactRecord").saveRecord(function(saveResult){
            console.log(saveResult.state);
            if(saveResult.state === "SUCCESS" || saveResult.state === "DRAFT"){
                var resultsToast = $A.get("e.force:showToast");
                resultsToast.setParams({
                    "title": "Saved",
                    "message": "The record is saved"
                });
                console.log('------'+JSON.stringify(resultsToast))
                resultsToast.fire();
                
            }else if(saveResult.state === "INCOMPLETE"){
                console.log("User is offline, device doesn't support drafts.");
            }else if(saveResult.state === "ERROR"){
                console.log('Problem saving contact, error: '+
                           JSON.stringify(saveResult.error));
                
            }else{
                console.log('Unknown problem, state: '+ saveResult.state + ', error: '
								+ JSON.stringify(saveResult.error));
            }
            
        });
        
    }
})