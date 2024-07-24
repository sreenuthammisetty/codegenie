import { LightningElement } from 'lwc';

export default class Lwc_event_dispatcher extends LightningElement {
    callincrease(){
        const inc=new CustomEvent('incre');
        this.dispatchEvent(inc);
    }
    calldecrease(){
        this.dispatchEvent(new CustomEvent('decre'));
    }
}