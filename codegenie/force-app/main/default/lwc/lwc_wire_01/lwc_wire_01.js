import { LightningElement, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
const FIELDS = [
    'Opportunity.Name',
    'Opportunity.Amount',
    'Opportunity.StageName'
];

export default class Lwc_wire_01 extends LightningElement {
    @api recordId;

    @wire(getRecord,{recordId:'$recordId', fields:FIELDS}) Opportunity;

    get Name(){
        return this.Opportunity.data.fields.Name.value;
    }
    get Amount(){
        return this.Opportunity.data.fields.Amount.value;
    }
    get StageName(){
        return this.Opportunity.data.fields.StageName.value;
    }
}