import amqplib, { Channel, Connection } from 'amqplib';
export enum amqplibQueues {
    USER = "USER"
}
export enum userActions {
    USER_CREATION = "USER_CREATION"
}
export interface IAmqpLibConnect {
    url: string;
    channel: Channel;
    connection: Connection;
}
export class AmqpLibConnect implements IAmqpLibConnect {
    declare url: string;
    declare channel: Channel;
    declare connection: Connection;
    declare userChannel: any;
    async connect(url: string) { this.connection = await amqplib.connect(url) }
    async createChannel() { this.channel = await this.connection.createChannel() }
    async createUserQueue() { this.userChannel = await this.channel.assertQueue(amqplibQueues.USER) }
}
let amqplibInstance = new AmqpLibConnect();

export default amqplibInstance;