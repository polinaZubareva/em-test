const createTableActions = `CREATE TABLE IF NOT EXISTS user_actions (
    id SERIAL PRIMARY KEY, 
    action VARCHAR(60) NOT NULL, 
    user_id INTEGER,
    FOREIGN KEY(user_id) REFERENCES users(id));`;
const createAction = `INSERT INTO user_actions(action, user_id) VALUES ($1, $2) RETURNING *;`;
const getActions = `SELECT * FROM user_actions 
    WHERE user_id IN ($1) 
    LIMIT $2;`;

export { createAction, createTableActions, getActions };
