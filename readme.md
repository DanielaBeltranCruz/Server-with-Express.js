# 🌟 App con Express.js

Ejemplo de creación de una app usando **Express.js**.

## 🔵 Crear servidor

1. Crear un proyecto nuevo `express_basic`.
    * Crea una carpeta con ese nombre.
    * Ejecuta el comando `npm init` y que se crea el archivo `package.json`.
2. Instala la dependencia express: `npm install express --save`.
3. Crea un archivo llamado `app.js` y crea la app de express:
```js
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

// Inicializando la app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
```
4. Corre la app con el comando `node app.js`. Esto hará que la app se quede en ejecución.
5. Entra a al navegador a `localhost:3000`.

## 🔵 Agregar una nueva ruta

6. Agrega una ruta nueva para poder responder algo en la url `localhost:3000/launchx`.
```js
// Respondiendo texto
// localhost:3000/launchx
app.get('/launchx', (req, res) => {
    res.send('Welcome to LaunchX')
})
```
7. Después de agregar el código, recuerda parar el servidor y volver a iniciarlo para poder ver los cambios.
> Para detener el servidor es `ctrl + c`.
8. Verifica que puedas entrar a `localhost:3000/launchx`.

## 🔵 Agregar nueva ruta para regresar un objeto

9. Agrega una nueva ruta y regresa un objeto:
```js
// Regresando un objeto
// localhost:3000/explorersInNode
app.get('/explorersInNode', (req, res) => {
    const explorer = {name: "Explorer", msg: "Hello"}
    res.send(explorer)
})
```
10. Deten el server, y vuelve a levantarlo para que tome tus cambios recientes.
11. Entra a la url `localhost:3000/explorersInNode` para verificar que regresa el objeto que indicaste.

## 🔵 Agregar una nueva ruta que reciba Query Params

12. Agrega una nueva ruta, indica que recibirá un parámetro: `/explorers/:explorerName`, esto indicará que `:explorerName` será un valor enviado por la url.
13. El objeto `req` contiene la propiedad `params`, esta propiedad contiene los `Query Params` (parámetros) enviados por la url. (req.params)
```js
// Query Params: Recibir parámetros por la url
// http://localhost:3000/explorers/Daniela
// req.params = {"explorerName" : "Daniela"}
app.get('/explorers/:explorerName', (req, res) => {
    res.send(req.params)
})
```
14.  Entra a la url `localhost:3000/explorers/Daniela`.