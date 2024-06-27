({
	handleApplicationEvent : function(component, event, helper) {
		var msg = event.getParams("appMesasge");
        
        console.log(JSON.stringify(msg));
		component.set("v.message", msg.appMesasge);
	}
})