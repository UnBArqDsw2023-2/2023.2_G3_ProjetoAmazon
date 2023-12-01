import { Base_Message } from '../DecoratorAttachment/Base_Message';
import { Message_Decorator } from '../DecoratorAttachment/Message_Decorator';
import { Attachment_Message } from '../DecoratorAttachment/Attachment_File';

console.log('\n\n============= Mensagem sem anexo Implementado =============\n\n');
// Criando uma mensagem base sem anexo
const baseMessage = new Base_Message('Cliente', 'Vendedor', '\nOlá, tive um problema com o produto, mas não consigo mandar uma comprovação ): ', new Date());

// Enviando a mensagem sem anexo diretamente
baseMessage.sendMessage();

console.log('\n\n============= Mensagem com anexo Implementado =============\n\n');
// Criando uma mensagem base com anexo
const baseMessageWithAttachment = new Base_Message('Cliente', 'Vendedor', '\nOlá, tive um problema com o produto, mas agora consigo mandar uma foto comprovando (: ', new Date());

// Adicionando um decorator à mensagem base com anexo
const decoratedMessageWithAttachment = new Message_Decorator(baseMessageWithAttachment);

// Adicionando um anexo à mensagem decorada com anexo
const attachmentMessage = new Attachment_Message(decoratedMessageWithAttachment, 'Arquivo.pdf', 'Foto produto problematico');

// Enviando a mensagem com anexo
attachmentMessage.sendMessage();