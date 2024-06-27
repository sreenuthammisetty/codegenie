public class relatedCasesController {
    
    public List<Case> relatedCases {set; get;}
    
    public Boolean getIsClassic(){
        return (UserInfo.getUiThemeDisplayed() == 'Theme3');
    }
    
    public PageReference relatedCasesControllerMethod(){
        relatedCases = [SELECT Id, CaseNumber , Subject, Status from Case limit 5];
        return null;
    }
}