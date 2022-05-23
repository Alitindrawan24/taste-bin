import express, { Application } from 'express';
import { config as dotenv } from "dotenv";
import routes from "./routes";
import plugins from "./plugins";

class App{
    public app: Application;

    constructor(){
        this.app = express();
        this.plugins();
        this.routes();
        dotenv();
    }

    protected plugins(): void {
        plugins(this.app);
    }

    protected routes(): void {
        routes(this.app);        
    }    
}

const app = new App().app;
const port: number = parseInt(process.env.PORT ?? '3000');
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});