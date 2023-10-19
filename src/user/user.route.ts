import { Router } from 'express';
import userController from './user.constroller';
const userRouter = Router();

userRouter.post('/', userController.post);
userRouter.get('/', userController.getUsers);
userRouter.delete('/:id', userController.delete);
userRouter.put('/', userController.put);

export { userRouter };
