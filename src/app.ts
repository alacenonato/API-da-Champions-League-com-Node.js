import { json } from 'express';
import express from 'express';
import router from './routers/routers';

function createApp() {
    const app = express();

    app.use(json());

    app.use('/api', router);
   
    return app;
}

export default createApp;
