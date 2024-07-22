global class CL_FakeRestMain implements HttpCalloutMock
{
    global HttpResponse respond(HttpRequest req){
        String endpoint = req.getEndpoint();
        String method = req.getMethod();
        System.assertEquals('https://bcguru.onrender.com/api/data',endpoint);
        System.assertEquals('GET',method);
        
        HttpResponse response =new HttpResponse();
        response.setBody('Sreenu');
        response.setStatusCode(200);
        return response;
    }
}