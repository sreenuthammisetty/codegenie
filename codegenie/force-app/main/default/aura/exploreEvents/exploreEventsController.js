({
	handleChildOneEvent : function(component, event, helper) {
        var updatedMessage = event.getParams("messageEvent");
        console.log(JSON.stringify(updatedMessage));
		component.set("v.message", updatedMessage.messageEvent);
	}
})