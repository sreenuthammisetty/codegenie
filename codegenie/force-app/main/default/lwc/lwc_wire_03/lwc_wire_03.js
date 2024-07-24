import { LightningElement, track, api, wire } from 'lwc';
import CreateAccountRecord from '@salesforce/apex/CL_lwc03Controller.CreateAccountRecord';

export default class Lwc_wire_03 extends LightningElement {
    @track accname;
    @track accrevenue;
    @track accrating;
    @track accindus;

    aname(event)
    {
        console.log('In first field');
        this.accname = event.target.value;
    }
    arevenue(event)
    {
        this.accrevenue = parseFloat(event.target.value);
    }
    arating(event)
    {
        this.accrating = event.target.value;
    }
    aindus(event)
    {
        this.accindus = event.target.value;
    }

    createaccount(event){
        CreateAccountRecord({Name:this.accname,AnnualRevenue:this.accrevenue,Rating:this.accrating,Industry:this.accindus})
        .then(data => {
            alert('Successfully created account.')
          })
          .catch(error => {
            alert('Failed to create account.')
          });
    }
    
}