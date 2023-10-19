import databaseConnection from '../db/pool';
import {
  createUser,
  deleteUser,
  updateUser,
} from '../db/userQueries';
import { TUser } from './user.type';

class UserService {
  async getUsers(ids: string | null, limit: number) {
    if (ids !== null)
      return (
        await databaseConnection.query(
          `SELECT * FROM users 
          WHERE id in (${ids})
          LIMIT $1;`,
          [limit]
        )
      ).rows;
    return (
      await databaseConnection.query(
        `SELECT * FROM users 
          LIMIT $1;`,
        [limit]
      )
    ).rows;
  }

  async postUser(user: TUser) {
    return (
      await databaseConnection.query(createUser, [
        user.name,
        user.birthdate,
      ])
    ).rows;
  }

  async deleteUser(id: number) {
    return (await databaseConnection.query(deleteUser, [id]))
      .rowCount;
  }

  async updateUser(user: TUser) {
    const { id, name, birthdate = null } = user;
    return (
      await databaseConnection.query(updateUser, [
        name,
        birthdate,
        id,
      ])
    ).rows;
  }
}

export default new UserService();
