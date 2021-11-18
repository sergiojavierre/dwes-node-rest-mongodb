import mongoose from "mongoose";

const Schema = mongoose.Schema;

import { Modulo } from "./Modulo.js";

const EstudianteSchema = Schema({
  //referencia: https://mongoosejs.com/docs/guide.html
  nombre: String,
  apellidos: String,
  creacion: { type: Date, default: Date.now() },
  fechaNacimiento: Date,
  intereses: [String],
  modulos: [{ type: Schema.Types.ObjectId, ref: Modulo }],
});

const Estudiante = mongoose.model("Estudiante", EstudianteSchema);

export { Estudiante };
