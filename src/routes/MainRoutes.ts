import BaseRoutes from "./BaseRoutes";
import MainController from '../controllers/MainController';

class MainRoutes extends BaseRoutes {
    public routes(): void {
        this.router.get('/', MainController.index);
        this.router.get('/new', MainController.create);
        this.router.get('/:id', MainController.show);
        this.router.get('/:id/duplicate', MainController.duplicate);
        this.router.post('/save', MainController.store);
    }
}

export default new MainRoutes().router;