import { LightningElement,wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation'
import { fireEvent } from 'c/pubsub';

export default class Lwc_events_pubsub_publisher extends LightningElement {
   
    @wire(CurrentPageReference) CurrentPageReference;

    postme(event){
        let message={
            "msg":"Hi This is Publisher wishing you via pubsub",
            "sender":"Sreenu",
            "phone":"8897646589"
        };
        fireEvent(this.CurrentPageReference,'eventnotify',message);
    }
}