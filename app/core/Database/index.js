import postgres from 'postgres';

const sql = postgres({
  user: 'exchange',
  host: 'localhost',
  database: 'exchange',
  password: 'exchange',
  port: 5432
});

export default sql;
