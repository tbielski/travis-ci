const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send({message: 'Hello from my node app!'})
})

app.post('/', (req, res) => {
    res.send({message: 'Wow! You did a POST!'})
})

app.put('/', (req, res) => {
    res.send({message: 'PUT'})
})

app.delete('/', (req, res) => {
    res.send({message: 'Deleting ...'})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = app