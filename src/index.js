const express = require('express')
const bodyParser = require("body-parser");
const app = express()
const port = 3000

const students = []

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// endpoint
app.get('/', (req, res) => {
    res.send('Proyecto API Erick Gilbert- Node')
})

// crear studiante
app.post('/students', (req, res) => {
    const data = req.body

    students.push(data)

    res.status(200).send(students)
})

// actualizar studiante
app.put('/students', (req, res) => {
    // parametro
    const { id } = req.query

    // datos del body
    const data = req.body

    // obtengo indice del array por el id
    const index = students.findIndex(q => q.id == id)

    // actualizo los campos del arreglo segun el id
    students[index].first_name = data.first_name
    students[index].last_name = data.last_name

    res.status(200).send(students)
})

// eliminar studiante
app.delete('/students', (req, res) => {
    // parametro
    const { id } = req.query

    const index = students.findIndex(q => q.id == id)

    students.splice(index, 1);

    res.status(200).send(students)
})

// consulta de studiantes
app.get('/students', (req, res) => {
    res.status(200).send(students)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})