({
	doInit : function(component, event, helper) {
		console.log("HEY!!! This is initHandler");
	},
    
    handleRender: function(component, event, helper) {
		console.log("HEY!!! This is renderHandler");
	},
    handleChange: function(component, event, helper) {
		var oldValue = event.getParam("oldValue");
        var value = event.getParam("value");
        
        console.log(oldValue);
        console.log(value);
	}
})