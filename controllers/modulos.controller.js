import { Modulo } from "../models/Modulo.js";

const get = (req, res) => {
  Modulo.find({}, (err, data) => {
    res.json(data);
  });
};

const add = (req, res) => {
  const modulo = new Modulo(req.body);
  modulo.save((err, data) => {
    if (err) res.send(err);
    else res.send(data);
  });
};

export { get, add };
