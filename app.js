
import express from 'express';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
const port = 8080;

//mongodb config
import mongoose from "mongoose";
const mongoDB = 'mongodb://localhost/demoMongo'
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', console.error.bind(console, 'Mongoose error: '))

//controller de estudiantes
import * as controllerEstudiantes from './controllers/estudiantes.controller.js'

app.get('/', controllerEstudiantes.get)
app.get('/:id', controllerEstudiantes.getById)
app.post('/', controllerEstudiantes.add)
app.put('/:id', controllerEstudiantes.update)
app.delete('/:id', controllerEstudiantes.deleteById)

app.listen(port, () => {
    console.log('listening on port ' + port);
})