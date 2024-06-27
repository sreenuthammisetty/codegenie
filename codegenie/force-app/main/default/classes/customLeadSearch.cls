public with sharing class customLeadSearch {
    
    
    @AuraEnabled
    public static List<Lead> searchLeadsFunc(String searchTerm){
        
        List<Lead> leads = Database.query('SELECT Id, Name, MobilePhone, Email from Lead WHERE Name LIKE \'%' + searchTerm +'%\' ');
        return leads;
    }

}