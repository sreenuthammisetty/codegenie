public with sharing class whichButtonIsClicked {
    
    @AuraEnabled
    public static String whichButtonIsClickedMethod(){
    	return 'Yes is clicked';    
    }
    
    @AuraEnabled
    public static String noButtonIsClickedMethod(){   
    	return 'No is clicked';    
    }

}