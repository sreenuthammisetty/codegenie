import { LightningElement } from 'lwc';

export default class LWC_FirstLwcComponent extends LightningElement {
    callme(){
        alert('Hi, This is executed from LWC js file.');
    }
}