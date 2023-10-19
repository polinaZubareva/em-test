import { Router } from 'express';
import { userRouter } from './user/user.route';
import actionRouter from './actions/action.route';

const router = Router();

router.use('/user', userRouter);
router.use('/userActions', actionRouter);

export { router };
