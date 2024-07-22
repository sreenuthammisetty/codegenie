import { LightningElement, api } from 'lwc';

export default class Lwc_LightningDataService_02 extends LightningElement {
    @api recordId;

    resetFormAction(event) {
        const lwcInputFields = this.template.querySelectorAll('lightning-input-field');
        lwcInputFields.forEach(field => {
                field.reset(); 
        });
     }
}