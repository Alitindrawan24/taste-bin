import express, { Application } from 'express';
import { config as dotenv } from "dotenv";
import routes from "./routes";
import plugins from "./plugins";
import handlings from "./handlings";

class App{
    public app: Application;

    constructor(){
        this.app = express();
        dotenv();
        this.plugins();
        this.routes();
        this.handlings()
    }

    protected plugins(): void {
        plugins(this.app);
    }

    protected routes(): void {
        routes(this.app);        
    }    
    
    protected handlings(): void {
        handlings(this.app);        
    }    
}

const app = new App().app;
const port: number = parseInt(process.env.PORT ?? '3000');
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});