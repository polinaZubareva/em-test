import { createAction } from '../db/actionQueries';
import databaseConnection from '../db/pool';

class ActionService {
  async create(action, user_id) {
    return await databaseConnection.query(createAction, [
      action,
      +user_id,
    ]);
  }

  async get(ids, limit) {
    return (
      await databaseConnection.query(
        `SELECT * FROM user_actions 
    WHERE user_id IN ($1) 
    LIMIT $2;`,
        [ids, limit]
      )
    ).rows;
  }
}

export default new ActionService();
