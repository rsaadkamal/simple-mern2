const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('<H3>Voyage Calculator API Layer</H3>')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
