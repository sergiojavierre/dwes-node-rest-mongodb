import { Estudiante } from "../models/Estudiante.js";
import { Modulo } from "../models/Modulo.js";

const get = (req, res) => {
  //búsqueda de todos sin filtro
  Estudiante.find({}, (err, data) => {
    res.json(data);
  });
};

const getById = (req, res) => {
  //filtro con el id pasado en la URL
  Estudiante.findOne({ _id: req.params.id })
    .populate("modulos")
    .exec((err, data) => {
      if (err) res.send(err);
      else res.send(data);
    });
};

const add = (req, res) => {
  //creo un estudiante con los datos que llegan en el body y uso el modelo de Estudiante
  const estudiante = new Estudiante(req.body);
  estudiante.save((err, data) => {
    if (err) res.send(err);
    else res.send(data);
  });
};

const addModulo = (req, res) => {
  Modulo.findById(req.params.modulo, (err, modulo) => {
    if (err) res.send(err);
    else {
      Estudiante.findById(req.params.id, (err, estudiante) => {
        if (err) res.send(err);
        else {
          estudiante.modulos.push(modulo);
          estudiante.save((err, data) => {
            if (err) res.send(err);
            else res.send(data);
          });
        }
      });
    }
  });
};

const update = (req, res) => {
  //busco por id en la URL y actualizo aquellos campos que llegan en el body
  Estudiante.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
    if (err) res.send(err);
    else res.send(data);
  });
};

const deleteById = (req, res) => {
  //busco por id y borro
  Estudiante.findOneAndDelete(req.params.id, (err, data) => {
    if (err) res.send(err);
    else res.send(data);
  });
};

export { get, getById, add, addModulo, update, deleteById };
