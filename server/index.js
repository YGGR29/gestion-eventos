import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import cookieParser from 'cookie-parser';

import db from "./src/database/db.js";

import UsuariosRouter from "./src/Routes/usuariosRouter.js";

const app = express();

dotenv.config();

db.authenticate()
  .then(() => console.log("Databse connection successful"))
  .catch((error) => console.log("Connection error: ", error));

app.use( cors({
    origin: '*',
}));

app.use("/usuarios", UsuariosRouter);

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Funcionando");
});

app.listen(
  process.env.PORT,
  console.log("Servidor en el puerto " + process.env.PORT)
);
