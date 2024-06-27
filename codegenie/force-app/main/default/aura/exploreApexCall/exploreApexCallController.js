({
	handleClick : function(component, event, helper) {
        //Step1: Mention the name of the Apex method
        var action = component.get(' c.foobar ');
        var message = 'HEY!!!! Teja';
        //Step2: Set the params
        action.setParams({
            'accountName': 'sForce', 
            'count': 'sForce',
        });
        
        //Step3: Define the callback function 
        action.setCallback(this,function(response){
            var state = response.getState();
            console.log(message);
            if(state === 'SUCCESS'){
                var returnValue = response.getReturnValue();
                console.log(returnValue);
                
            }else if(state === 'INCOMPLETE'){
                
            }else if(state === 'ERROR'){
                
            }else{
                
            }
            
        });
        
        //Step4: Push the request into the queue
        $A.enqueueAction(action);
	}
})