import express, { Application } from 'express';
import PrettyError from 'pretty-error';
import { rateLimit } from 'express-rate-limit'
class Plugins {
    public plugins(app: Application): void {       
        new PrettyError().withoutColors().start();

        app.set('view engine', 'ejs')

        app.use(express.static('public'))
        app.use(express.urlencoded({extended: true}))

        const limiter = rateLimit({
            windowMs: 1 * 60 * 1000, // 1 minutes
            max: 10, // Limit each IP to 10 requests per `window` (here, per 1 minutes)
            standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
            legacyHeaders: false, // Disable the `X-RateLimit-*` headers
        })
        app.use(limiter)
    }
}

export default new Plugins().plugins;