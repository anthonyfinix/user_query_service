// imports
import express, { Application, Router } from 'express';
import dbConnect from './util/dbConnect';
import router from './routes';
import maintenance from './routes/maintenance';
import configuration, { IConfig } from './config';
import amqplibInstance from './util/amqpConnect';
export default async (options: IConfig): Promise<Application> => {
    configuration.setConfiguration(options);
    let dbConnection = await dbConnect({ mongoURI: configuration.mongoURI, options: configuration.mongooseOptions });
    try{
        await amqplibInstance.connect(configuration.amqplibURL);
        await amqplibInstance.createChannel();
        await amqplibInstance.createUserQueue();
    }catch(e){
        console.log(e);
    }
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

