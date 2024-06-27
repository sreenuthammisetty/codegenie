({
	handleUpdate : function(component, event, helper) {
        component.find('record').saveRecord($A.getCallback(function(saveResult){

            
            if(saveResult.state === "SUCCESS" || saveResult.state === "ERROR"){
                console.log('HEY!!! Your record is saved');
            }else if(saveResult.state === "INCOMPLETE"){
                
            }else if(saveResult.state === "ERROR"){
                
            }else{
                console.log('Unknown Error');
            }
            
        }));
	}
})