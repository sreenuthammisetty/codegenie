@RestResource(urlmapping='/createAccount/*')
global class CL_Rest_Receive_Service {
    //Use Workbench >> REST Explorer to test this.
    //  /services/apexrest/createAccount
    @HttpPost
    global static String callme(String name, String phone, String industry)
    {
        System.JSONGenerator js = JSON.createGenerator(true);
        js.writeStartObject();
        try{
            Account acc=new Account();
            acc.Name=name;
            acc.Phone=phone;
            acc.Industry=industry;
            insert acc;
            js.writeStringField('Status','Success');
            js.writeStringField('AccountId',acc.Id);
        }
        catch(Exception e)
        {
            js.writeStringField('Status','Failed');
            js.writeStringField('Error:',e.getMessage());
        }
        js.writeEndObject();
        String result=js.getAsString();
        return result;
    }
}