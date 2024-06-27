public with sharing class similarCasesController {
    public static List<Case> caseList{set;get;}
    @AuraEnabled
    public static List<Case> getSimilarCaseRecords(String status, String priority){
			       
        /**if(priority != null){
            caseList = [SELECT Id, CaseNumber, Status, Priority, Origin from Case where priority =: priority]; 
        } else {
       		caseList =  [SELECT Id, CaseNumber, Status, Priority, Origin from Case where status =: status]; 
        }*/
        
        return [SELECT Id, CaseNumber, Status, Priority, Origin from Case where status =: status];
    }

}