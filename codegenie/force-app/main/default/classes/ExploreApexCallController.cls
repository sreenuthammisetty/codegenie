public class ExploreApexCallController {
    
	@AuraEnabled
    public static List<Account> foobar(String accountName, String count){
        System.debug(' 🚀 ' +count);
		return [SELECT Id, Name, Rating, Industry FROM Account WHERE NAME =: count];        
    }
}