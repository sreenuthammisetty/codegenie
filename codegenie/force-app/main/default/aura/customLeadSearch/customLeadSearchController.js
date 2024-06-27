({
	searchLeads : function(component, event, helper) {
        
        
        var action = component.get("c.searchLeadsFunc");
        
        action.setParams({
            searchTerm: component.get("v.searchQuery")
        });
        
        action.setCallback(this, function(response){
           var state = response.getState();
            console.log(state);
            if(state === "SUCCESS"){
                console.log(JSON.stringify(response.getReturnValue()));
                console.log(response.getReturnValue());
                component.set("v.leadsSearchList",response.getReturnValue());
            }else{
                console.log("Failed"+ State)
            }
            
            
            
            
        });
        
        $A.enqueueAction(action);
        
    }
})