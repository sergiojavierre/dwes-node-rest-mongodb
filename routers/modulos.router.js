import express from "express";

const router = express.Router();

import * as controllerModulos from "../controllers/modulos.controller.js";

router.get("/", controllerModulos.get);
router.post("/", controllerModulos.add);

export { router };
