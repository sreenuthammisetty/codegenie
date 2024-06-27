({
    fetchAllRedditPosts : function(component, event, helper) {
        
        var action = component.get("c.getAllPosts");
        
        action.setCallback(this, function(response){
            var state = response.getState();
            
            if(state === "SUCCESS"){
                console.log(response.getReturnValue ());
                component.set("v.allPosts",response.getReturnValue ());                
            }
            else{
                console.log(state);
            }
        });
        
        $A.enqueueAction(action);
        
    },
    
    naviagateToThePost : function(component, event, helper) {
        var goToCmp = $A.get("e.force:navigateToComponent");
        
        var ctarget = event.currentTarget;
        var id_str = ctarget.dataset.id;
        //event.target.getAttribute("data-recId");
        console.log(id_str);
        goToCmp.setParams({
            componentDef : "c:redditClonePostDetailsTemp",
            componentAttributes: {
                recordId : id_str
            }
        });
        goToCmp.fire();
    }
})