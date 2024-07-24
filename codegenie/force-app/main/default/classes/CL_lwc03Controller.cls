public class CL_lwc03Controller {
    
    @AuraEnabled
    public static string CreateAccountRecord(String Name, Decimal AnnualRevenue, String Rating, String Industry)
    {
        String Result;

        try{
            Account a = new Account();
            a.Name = Name;
            a.AnnualRevenue = AnnualRevenue;
            a.Rating = Rating;
            a.Industry = Industry;
            insert a;
            Result = 'Account is created with Id: ' + a.Id;
        }
        catch(Exception e)
        {
            Result = 'Account creation is failed with error: ' + e.getMessage();
        }
        return Result;
    }
}