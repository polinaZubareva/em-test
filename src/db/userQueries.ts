const createTable = `CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY, 
    name VARCHAR(60) NOT NULL, 
    birthdate DATE);`;
const createUser = `INSERT INTO users(name, birthdate) VALUES ($1,$2) RETURNING *;`;
const updateUser = `UPDATE users SET(name, birthdate)=($1, $2) 
    WHERE id=$3
    RETURNING *;`;
const deleteUser = `DELETE FROM users WHERE id=$1;`;
const getUsers = `SELECT * FROM users 
    WHERE id in ($1)
    LIMIT $2;`;

export { createTable, createUser, updateUser, deleteUser, getUsers };
