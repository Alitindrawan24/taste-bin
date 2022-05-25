import express, { Application } from 'express';
import PrettyError from 'pretty-error';
class Plugins {
    public plugins(app: Application): void {       
        new PrettyError().withoutColors().start();

        app.set('view engine', 'ejs')

        app.use(express.static('public'))
        app.use(express.urlencoded({extended: true}))
    }
}

export default new Plugins().plugins;