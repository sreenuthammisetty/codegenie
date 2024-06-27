public with sharing class showContactsListCon {
    
    @AuraEnabled
    public static List<contact> getContacts(){
        
        List<Contact> con = [select Id,Name,Email from Contact];
        
        return con;
    }

}