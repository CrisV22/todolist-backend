const { Pool } = require('pg');

const pool = new Pool({
  host: 'db', // nome do serviço no docker-compose
  port: 5432,
  user: 'admin',
  password: 'admin',
  database: 'tododb',
});

module.exports = pool;
