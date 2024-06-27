global with sharing class testVueJsPageController {
 	
    public static Account account { get; set; }
    public testVueJsPageController() { } // empty constructor
    
    @RemoteAction
    global static Account getAccount() {
        account = [SELECT Id, Name FROM Account];
        return account;
    }
}