public with sharing class checkFLSForLeadsCon {
    
    @AuraEnabled
    public static List<Lead> LeadsList(){
        
        //Check to make sire all fields are accessible to this user
        //isAccessible() and isUpdateable()
        String[] fieldsToCheck = new String[]{
          'Id', 'Name', 'Company'  
        };
        
            
		Map<String, Schema.SObjectField> fieldDescribeTokens = Schema.SObjectType.Lead.fields.getMap();
        
        for(String field : fieldsToCheck){
            if(! fieldDescribeTokens.get(field).getDescribe().isUpdateable()){
                throw new System.NoAccessException();
                
            }
        }
            
        
        
        
        return [SELECT Id, Name from Lead];
    }
    

}