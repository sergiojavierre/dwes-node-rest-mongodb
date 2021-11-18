import express from "express";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = 8080;

//mongodb config
import mongoose from "mongoose";
const mongoDB = "mongodb://localhost/demoMongo";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Mongoose error: "));

//routers
import { router as estudiantesRouter } from "./routers/estudiantes.router.js";
import { router as modulosRouter } from "./routers/modulos.router.js";

app.use("/estudiantes", estudiantesRouter);
app.use("/modulos", modulosRouter);

app.listen(port, () => {
  console.log("listening on port " + port);
});
