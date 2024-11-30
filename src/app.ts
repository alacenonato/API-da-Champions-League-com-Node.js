import { json } from 'express';
import express from 'express';
import router from './routers/routers';
import cors from 'cors';

function createApp() {
    const app = express();

    app.use(json());

    app.use('/api', router);

    // uso do cors
    // const corsOpitions = {
    //     origing: "http://alace.systme.com",
    //     methods: ['GET'],
    // }
    // app.use(cors(corsOpitions));

    app.use(cors());

    return app;
}

export default createApp;
