const DB_HOST = 'localhost'; // process.env.DB_HOST;
const DB_USERNAME = 'postgres'; // process.env.DB_USERNAME;
const DB_PASSWORD = 'postgres'; // process.env.DB_PASSWORD;
const DB_NAME = 'development'; // process.env.DB_NAME;

module.exports = {
  plugins: [],
  projectConfig: {
    redis_url: process.env.REDIS_URL,
    database_url: `postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
    database_type: 'postgres',
    jwt_secret: 'test',
    cookie_secret: 'test',
  },
};
