public class CL_lwcWire02Controller {
    
    @AuraEnabled(cacheable=true)
    public static List<Account> bringAccData(){
        List<Account> acc=[SELECT Id, Name, Rating, Industry, Phone FROM Account];
        return acc;
    }
    
}