
import mongoose from "mongoose";

const EstudianteSchema = mongoose.Schema({
    //referencia: https://mongoosejs.com/docs/guide.html
    nombre: String,
    apellidos: String,
    creacion: { type: Date, default: Date.now() },
    fechaNacimiento: Date,
    intereses: [String]
})

const EstudianteModel = mongoose.model('Estudiante', EstudianteSchema)

export { EstudianteModel }