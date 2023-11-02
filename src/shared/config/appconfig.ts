export default (): any => ({
  logDir: process.env.LOG_DIR,
  //to do : use database config from here
  database: {
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
  },
  jwt: {
    secretKey: process.env.JWT_APPLICATION_KEY,
    expiresIn: process.env.JWT_EXPIRES_IN,
  },
});
