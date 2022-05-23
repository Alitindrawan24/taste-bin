import express, { Application } from 'express';

class Plugins {
    public plugins(app: Application): void {        
        app.set('view engine', 'ejs')

        app.use(express.static('public'))
        app.use(express.urlencoded({extended: true}))
    }
}

export default new Plugins().plugins;