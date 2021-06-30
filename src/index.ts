// imports
import express, { Application, Router } from 'express';
import dbConnect from './util/dbConnect';
import router from './routes';
import maintenance from './routes/maintenance';
import configuration, { IConfig } from './config';
import amqplib from 'amqplib';
export default async (options: IConfig): Promise<Application> => {
    configuration.setConfiguration(options);
    let conn = await amqplib.connect('amqps://zutacfqe:3EfVmYuVBftoLLugUOfBAIGnvxvQ_JK_@puffin.rmq2.cloudamqp.com/zutacfqe');
    let channel = await conn.createChannel();
    await channel.assertQueue('task', { durable: true });
    channel.sendToQueue('task', Buffer.from('Hello World'), { persistent: true });
    channel.consume('task',(msg)=>{
        console.log(msg?.content.toString());
    })
    let dbConnection = await dbConnect({ mongoURI: configuration.mongoURI, options: configuration.mongooseOptions });
    const app: Application = express();
    if (!dbConnection.error) {
        console.log(`db connected`)
        app.use(router);
    } else {
        console.log(`db error: ${dbConnection.error.message}`)
        app.use(maintenance);
    }
    return app;
}

