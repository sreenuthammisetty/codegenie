public class CL_Sample_Integration {
    public void invoke()
    {
        String endpoint='https://bcguru.onrender.com/api/data';
        Http p = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint(endpoint);
        request.setMethod('GET');
        
        HttpResponse response = p.send(request);
        String result=response.getBody();
        
        Account acc=new Account();
        acc.Name=result;
        insert acc;
    }
}