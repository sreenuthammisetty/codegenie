public class CL_LC_Controller {
    
    @AuraEnabled
    public static Account givedata(){
        Account acc = [SELECT Id, Name, Phone, Industry, Rating FROM Account LIMIT 1];
        return acc;
    }

}