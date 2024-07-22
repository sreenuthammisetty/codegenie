import { LightningElement } from 'lwc';

export default class LWC_Variables extends LightningElement {
    name='Srinivas T';
    age=35;
    city='Hyderabad';
    sal=5000.45;
    empid;

    callme()
    {
        this.name='Anitha';
        this.age=33;
        this.city='Chennai';
        this.sal=6000.55;
        this.empid=1275;
        console.log('empid: ' + this.empid);
    }
}