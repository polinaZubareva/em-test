import actionService from './action.service';

class ActionController {
  async create(req, res) {
    const { action, user_id } = req.body;
    res.send(await actionService.create(action, +user_id));
  }

  async get(req, res) {
    let { user_id, limit = 3 } = req.query;
    res.send(await actionService.get(user_id, limit));
  }
}

export default new ActionController();
