public with sharing class redditClonePostDetailsController {

    
    @AuraEnabled
    public static String grabTheRecId(String recordId){
        System.debug('--------'+ recordId);
        return null;
    }
}