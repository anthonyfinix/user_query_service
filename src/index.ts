// imports
import express, { Application, Router } from 'express';
import dbConnect from './util/dbConnect';
import router from './routes';
import maintenance from './routes/maintenance';
import config from './util/config';

export default async (mongoURI: string): Promise<Application> => {
    let { error: dbError, connection: dbConnection } = await dbConnect({ mongoURI, options: config.mongooseOptions });
    const app: Application = express();
    if (!dbError) {
        app.use(router);
    } else {
        app.use(maintenance);
    }
    return app;
}

