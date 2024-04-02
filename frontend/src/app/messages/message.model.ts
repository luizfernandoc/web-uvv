export class Message {
    content: string;
    messageId: string;
    userId: string;
    username: string;

    constructor(content: string, messageId: string, userId: string, username: string ){
        this.content = content;
        this.messageId = messageId;
        this.userId = userId;
        this.username = username;
    }
}