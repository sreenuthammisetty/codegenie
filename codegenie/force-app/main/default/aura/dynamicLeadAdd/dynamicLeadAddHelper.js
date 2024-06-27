({
	createObjectData: function(component, event) {
        // get the contactList from component and add(push) New Object to List  
        var RowItemList = component.get("v.leadList");
        RowItemList.push({
            'sobjectType': 'Lead',
            'LastName': '',
            'Email': ''
            
        });
        console.log('--------');
        // set the updated list to attribute (contactList) again    
        component.set("v.leadList", RowItemList);
    },
})