public class CL_HttpRequestWithJSONResponse {
    List<String> places = new List<String>();
    
    public void getPostalDetails(String pincode){
        String en='https://api.postalpincode.in/pincode/'+pincode;
        Http p=new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint(en);
        request.setMethod('GET');
        HttpResponse response = p.send(request);
        String body=response.getBody();
        System.JSONParser jp = JSON.createParser(body);
        while(jp.nextToken() != null){
            if(jp.getText()=='Name'){
                jp.nextToken();
                places.add(jp.getText());
            }
        }
        System.debug(places);
    }
}