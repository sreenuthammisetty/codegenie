({
	handleRecordUpdated : function(component, event, helper) {
		var changeType = event.getParams().changeType;
        
        if(changeType === "ERROR"){
            console.log('There is an error in fetching the record');
        }else if(changeType === "LOADED"){
            console.log('Record is loaded');
        }else if(changeType === "CHANGED"){
            console.log(JSON.stringify(event.getParams().changedFields.Rating.oldValue));
            console.log(JSON.stringify(event.getParams().changedFields.Rating.value));
            
            console.log(JSON.stringify(event.getParams().changedFields.Type.oldValue));
            console.log(JSON.stringify(event.getParams().changedFields.Type.value));
        }else if(changeType === "REMOVED"){
            console.log('Record is being deleted');
        }else{
            console.log('Unknown error!!!');
        }
	}
})