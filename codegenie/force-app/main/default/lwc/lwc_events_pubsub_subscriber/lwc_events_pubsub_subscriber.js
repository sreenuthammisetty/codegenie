import { LightningElement, wire } from 'lwc';

import { CurrentPageReference } from 'lightning/navigation';
import { registerListener } from 'c/pubsub';

export default class Lwc_events_pubsub_subscriber extends LightningElement {
    message;
    
    @wire(CurrentPageReference) pageRef

    connectedCallback(){
        this.register();
    }

    register(){
        registerListener('eventnotify', this.handleevent.bind(this), this);
    }

    handleevent(messageFromEvt){
        window.console.log('event handled successfully', messageFromEvt);
        this.message = messageFromEvt?JSON.stringify(messageFromEvt,null,'\t'):'no message';
    }
}