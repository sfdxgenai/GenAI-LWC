import { LightningElement } from 'lwc';
export default class HelloWorld extends LightningElement {
        greeting = 'GenAI';
        changeHandler(event) {
        this.greeting = event.target.value;
        }
}