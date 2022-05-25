import {NextFunction, Request, Response} from 'express';
import mongoose from 'mongoose';
import Document from '../models/Document';
import fs from 'fs';
import { config as dotenv } from "dotenv";

class MainController
{
    constructor()
    {
        dotenv();        
        const MONGODB_HOST:string = process.env.MONGODB_HOST || 'localhost';
        mongoose.connect(MONGODB_HOST, {})
    }

    index = (req: Request, res: Response):void => {
        const code:string = fs.readFileSync('data/welcome.txt', 'utf8')
        const numbers:number = code.split('\n').length
        res.render('index', {
            code, numbers, language: 'markdown'
        })
    }

    create = (req: Request, res: Response):void => {
        res.render('new')
    }

    show = async (req: Request, res: Response, next: NextFunction):Promise<void> => {
        const { id } = req.params
        try {
            const document = await Document.findById(id)
            const code:string = document.value || '';
            const numbers:number = code.split('\n').length
            res.render('index', {code, numbers, id})
        } catch (error) {
            res.redirect('/')
            next(error)
        }
    }

    duplicate = async (req: Request, res: Response, next: NextFunction):Promise<void> => {
        const { id } = req.params
        try {
            const document = await Document.findById(id)
            const value:string = document.value || '';
            res.render('new', {value})
        } catch (error) {
            res.redirect(`/${id}`)
            next(error)
        }
    }

    store = async (req: Request, res: Response, next: NextFunction):Promise<void> => {
        const { value } = req.body
        try {
            const document = await Document.create({value})
            res.redirect(`/${document.id}`)
        } catch (error) {
            res.render('new', {value});
            next(error)
        }
    }
}

export default new MainController();