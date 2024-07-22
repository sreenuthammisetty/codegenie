public class CL_JSONParser {
    
    String jsonString = '{"Name":"Salesforce Kid","Marks":"[10,20,30]","City":"Hyd"}';
    Map<String, Object> result = new Map<String, Object>();
    
    public void deserializeUsingJsonParser(){
        System.JSONParser jp = JSON.createParser(jsonString);
        while(jp.nextToken() != null){
            result.put(jp.getText(), jp.getCurrentToken() );
        }
        System.debug(result);
    }
}