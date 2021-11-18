import mongoose from "mongoose";

const ModuloSchema = mongoose.Schema({
  nombre: String,
});

const Modulo = mongoose.model("Modulo", ModuloSchema);

export { Modulo };
