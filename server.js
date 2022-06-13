const express = require('express')
const app = express()
const port = 3100

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/contact', (req, res) => {
  res.send('You can reach me on +234-816-8787-584')
})

app.listen(3100, () => {
  console.log(`Example app listening on port ${port}`)
})
