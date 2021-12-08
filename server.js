import express from "express";
import cors from "cors";
import router from "./routes/pdRoute.js";
import db from "./models/index.js";

const app = express();

//MIDDLEWARES SETTINGS

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// all /api/v1/product route use this router

app.use("/api/v1/product", router);

app.get("/", (req, res) => {
  console.log("done!");
  res.status(200).send("connection succesfully done!");
});

const PORT = process.env.PORT || 8080;

db.sequelize.sync().then(() => {
  app.listen(PORT, () =>
    console.log(`listening at => http://localhost:${PORT}`)
  );
});
