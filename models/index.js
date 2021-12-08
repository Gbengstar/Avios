import dbConfig from "../config/dbConfig.js";
import pkg from "sequelize";
const { DataTypes, Sequelize } = pkg;
import Product from "./Product.js";
import Variant from "./Variant.js"; 

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

sequelize
  .authenticate()
  .then(() => console.log("connected to db"))
  .catch((error) => console.log("Error" + error));

const db = {};

db.Sequealize = Sequelize;
db.sequelize = sequelize;

db.products = Product(sequelize, DataTypes);
db.variants = Variant(sequelize, DataTypes);

db.sequelize.sync({ force: false }).then(() => console.log("re-sync done"));

export default db;
 