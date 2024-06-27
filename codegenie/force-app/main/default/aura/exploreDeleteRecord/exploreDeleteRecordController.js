({
	handleDelete : function(component, event, helper) {
        component.find('record').deleteRecord(
            $A.getCallback(
                function(result){
                    console.log(JSON.stringify(result));
                }
            )
        )
	}
})