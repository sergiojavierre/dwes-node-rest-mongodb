
import { EstudianteModel } from '../models/Estudiante.js'

const get = (req, res) => {
    //búsqueda de todos sin filtro
    EstudianteModel.find({}, (err, data) => {
        res.json(data)
    })
}

const getById = (req, res) => {
    //filtro con el id pasado en la URL
    EstudianteModel.findById(req.params.id, (err, data) => {
        if (err) res.send(err)
        else res.send(data)
    })
}


const add = (req, res) => {
    //creo un estudiante con los datos que llegan en el body y uso el modelo de Estudiante
    const estudiante = new EstudianteModel(req.body)
    estudiante.save((err, data) => {
        if (err) res.send(err)
        else res.send(data)
    })
}

const update = (req, res) => {
    //busco por id en la URL y actualizo aquellos campos que llegan en el body
    EstudianteModel.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
        if (err) res.send(err)
        else res.send(data)
    })
}

const deleteById = (req, res) => {
    //busco por id y borro
    EstudianteModel.findOneAndDelete(req.params.id, (err, data) => {
        if (err) res.send(err)
        else res.send(data)
    })
}

export { get, getById, add, update, deleteById }