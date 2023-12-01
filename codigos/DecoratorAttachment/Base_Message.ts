// baseMessage.ts
import { Message } from './Message';

export class Base_Message implements Message {
    private _sender: string;
    private _receiver: string;
    private _content: string;
    private _dateTime: Date;

    constructor(sender: string, receiver: string, content: string, dateTime: Date) {
        this._sender = sender;
        this._receiver = receiver;
        this._content = content;
        this._dateTime = dateTime;
    }

    sendMessage(): void {
        console.log(`Messagem Enviada em:  ${this._dateTime} De ${this._sender} Para ${this._receiver}: ${this._content}`);
    }
}
