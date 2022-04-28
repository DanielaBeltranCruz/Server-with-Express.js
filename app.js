// Usando objeto express
const express = require('express')
// App de Express
const app = express()
// Puerto en que se va a ver la app: localhost:3000
const port = 3000

// path inicial, responderá a la url localhost:3000
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// Respondiendo texto
// localhost:3000/launchx
app.get('/launchx', (req, res) => {
    res.send('Welcome to LaunchX')
})

// Regresando un objeto
// localhost:3000/explorersInNode
app.get('/explorersInNode', (req, res) => {
    const explorer = {name: "Explorer", msg: "Hello"}
    res.send(explorer)
})

// Inicializando la app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
