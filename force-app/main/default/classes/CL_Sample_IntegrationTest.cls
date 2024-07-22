@isTest
public class CL_Sample_IntegrationTest {
    
    @isTest
    public static void testInvoke()
    {
        CL_FakeRestMain data = new CL_FakeRestMain();
        Test.setMock(HttpCalloutMock.class, data);
        
        CL_Sample_Integration re = new CL_Sample_Integration();
        re.invoke();
        
        Account ac= [SELECT Id, Name FROM Account];
        
        System.assertEquals('Sreenu', ac.Name);
    }
}