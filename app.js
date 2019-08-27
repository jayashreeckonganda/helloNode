const express = require('express')
const app = express()
const port = 4200

app.get('/', (req, res) => res.send('Hello Testing the Get Request-1002'))

console.log("Working");

app.listen(port, () => console.log(`Build Successfull!  ${port}!`))
