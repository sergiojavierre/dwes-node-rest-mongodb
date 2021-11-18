import express from "express";

const router = express.Router();

import * as controllerEstudiantes from "../controllers/estudiantes.controller.js";

router.get("/", controllerEstudiantes.get);
router.get("/:id", controllerEstudiantes.getById);
router.post("/", controllerEstudiantes.add);
router.post("/:id/:modulo", controllerEstudiantes.addModulo);
router.put("/:id", controllerEstudiantes.update);
router.delete("/:id", controllerEstudiantes.deleteById);

export { router };
