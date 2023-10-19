import { Router } from 'express';
import actionController from './action.controller';

const actionRouter = Router();

actionRouter.get('/', actionController.get);
actionRouter.post('/', function (req, res) {
  actionController.post;
});

export default actionRouter;
