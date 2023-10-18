const createTable = `CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY, 
    name VARCHAR(60) NOT NULL, 
    birthdate DATE);`;

export { createTable };
