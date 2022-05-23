import { Application } from 'express';
import MainRoutes from './routes/MainRoutes';

class Routes {
    public routes(app: Application): void {
        app.use('/', MainRoutes)
    }
}

export default new Routes().routes;