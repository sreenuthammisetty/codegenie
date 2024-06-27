public with sharing class redditCloneHomePageController {
    
    
    @AuraEnabled
    public static List<Post__c> getAllPosts(){
        
        return [SELECT Id, Name,CreatedDate,Title__c,podyBody__c  from Post__c];
    }

}