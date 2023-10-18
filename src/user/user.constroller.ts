import { Response, Request } from 'express';
import userService from './user.service';

class UserController {
  async getUsers(req: Request, res: Response) {
    res.status(200).send(await userService.getUsers());
  }

  async post(req: Request, res: Response) {
    res.status(200).send(await userService.postUser());
  }

  async delete(req: Request, res: Response) {
    res.status(200).send(await userService.deleteUser());
  }
}

export default new UserController();
