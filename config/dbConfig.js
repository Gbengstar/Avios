
// configuration parameters for the database
export default {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "love6080",
  DB: "avios_db",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
