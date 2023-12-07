const { Pool } = require('pg');

const pool = new Pool({
  connectionString: 'postgres://aluno_20201214010016:706374@177.136.201.182:5439/temp?schema=aluno_20201214010016',
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

module.exports = pool;