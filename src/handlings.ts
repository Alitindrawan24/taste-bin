import { Application } from 'express';
import { config as dotenv } from "dotenv";

const errorToSlack = require('express-error-slack')
class Handlings {
    public handlings(app: Application): void {       
        dotenv();
        if(process.env.NODE_ENV === 'production'){
            app.use(errorToSlack({ webhookUri: process.env.SLACK_WEBHOOK_URI }))
        }
    }
}

export default new Handlings().handlings;