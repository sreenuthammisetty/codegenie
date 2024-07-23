import { LightningElement, track, wire } from 'lwc';
import ACCDATA from '@salesforce/apex/CL_lwcWire02Controller.bringAccData';

export default class Lwc_wire_02 extends LightningElement {
    @track accounts;
    @track errorhappened;
    
    @wire(ACCDATA)
    accountdatareceived({data,error}){
        if(data)
        {
            this.accounts=data;
        }
        else if(error)
        {
            console.log('errorhappened' + error);
            this.errorhappened=error;
            alert(error);
            console.log(error);
        }
    }
}