({
	save : function(component, event, helper) {
        
        var edit = component.find('edit');
        edit.get("e.recordSave").fire();
	}
})