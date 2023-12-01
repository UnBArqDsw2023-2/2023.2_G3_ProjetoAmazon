// messageDecorator.ts
import { Message } from './Message';

export class Message_Decorator implements Message {
    protected message: Message;

    constructor(message: Message) {
        this.message = message;
    }

    sendMessage(): void {
        this.message.sendMessage();
    }
}
