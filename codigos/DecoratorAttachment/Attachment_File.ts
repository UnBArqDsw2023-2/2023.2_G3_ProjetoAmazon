// attachmentMessage.ts
import { Message } from './Message';
import { Message_Decorator } from './Message_Decorator';

export class Attachment_Message extends Message_Decorator {
    private _attachmentName: string;
    private _attachmentContent: string;

    constructor(message: Message, attachmentName: string, attachmentContent: string) {
        super(message);
        this._attachmentName = attachmentName;
        this._attachmentContent = attachmentContent;
    }

    sendMessage(): void {
        super.sendMessage();
        console.log(`Anexo: ${this._attachmentName}, Conteudo: ${this._attachmentContent}`);
    }
}
