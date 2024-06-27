public with sharing class customLeadController {
    
    @AuraEnabled
    public static Lead saveLead(Lead leadParams){
        
        upsert leadParams;
        return leadParams;
    }

}