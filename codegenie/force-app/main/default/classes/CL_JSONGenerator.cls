public class CL_JSONGenerator {
    public void createJSON(String nm, String ph, String ind){
        
        System.JSONGenerator js = JSON.createGenerator(true);
        js.writeStartObject();
        try{
            Account a = new Account();
            a.Name = nm;
            a.Phone = ph;
            a.Industry = ind;
            insert a;
            
            js.writeStringField('Status','Success');
            js.writeIdField('AccId',a.Id);
            js.writeStringField('Msg','Account created successfully.');
            js.writeNumberField('Code',100);
        }catch(Exception e){
            js.writeStringField('Status','Failed');
            js.writeStringField('Msg',e.getMessage() );
            js.writeNumberField('Code',200);
        }
        js.writeEndObject();
        String result  = js.getAsString();
        System.debug(result);
    }
}