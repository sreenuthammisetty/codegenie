({
	getCaseRecord : function(component, event, helper) {
		var tempRec = component.find("editCaseRecord");
        tempRec.set("v.recordId", component.get("v.remoteRecordId"));
        tempRec.reloadRecord();
	},
    toggleDialog : function(component, event, helper){
        helper.toggleTheDailog(component);
    },
    saveRecord : function(component, event, helper){
        var newCaseSName = component.find('newCaseSuppliedName').get("v.value");
        var newCaseSEail = component.find('newCaseSuppliedEmail').get("v.value");
        var newCaseSPhone = component.find('newCaseSuppliedPhone').get("v.value");
        
        component.set("v.selectedCase.fields.SuppliedName.value", newCaseSName);
        component.set("v.selectedCase.fields.SuppliedEmail.value", newCaseSEail);
		component.set("v.selectedCase.fields.SuppliedPhone.value", newCaseSPhone);
        
        var tempRec = component.find("editCaseRecord");
        tempRec.saveRecord($A.getCallback(function(result){
            if(result.state === "SUCCESS" || result.state === "DRAFT"){
				console.log(result.state);
            }else if(result.state === "ERROR"){
                console.log(result.state);
            }else{
				console.log(result.state);               
            }
        }));
        
        helper.toggleTheDailog(component);
        
    }
    
})