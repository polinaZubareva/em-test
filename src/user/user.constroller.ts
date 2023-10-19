import { Response, Request } from 'express';
import userService from './user.service';
import { TUser } from './user.type';
import actionService from '../actions/action.service';

class UserController {
  async getUsers(req: Request, res: Response) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const ids: string = req.query?.ids || null;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const limit = +req.query.limit || 3;

    res.status(200).send(await userService.getUsers(ids, +limit));
  }

  async post(req: Request, res: Response) {
    const user: TUser = req.body;
    const createdUser = await userService.postUser(user);
    await actionService.create('post', createdUser[0].id);
    res.status(200).send({ user: createdUser });
  }

  async delete(req: Request, res: Response) {
    const id: number = Number(req.params.id);
    const deletedCount = await userService.deleteUser(id);
    res.send({ deletedCount });
  }

  async put(req: Request, res: Response) {
    const user: TUser = req.body;
    const updatedUser = await userService.updateUser(user);

    await actionService.create('update', updatedUser[0].id);

    res.status(200).send({ user: updatedUser });
  }
}

export default new UserController();
