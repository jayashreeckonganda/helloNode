const express = require('express')
const app = express()
const port = 4200

app.get('/', (req, res) => res.send('Hello Testing the Get Request-100'))

app.listen(port, () => console.log(`This will be the console message!  ${port}!`))
