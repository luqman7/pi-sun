const cors = require('cors')
const port = 8080
const express = require('express')
const app = express()
const {piAccurator} = require('./controller/calculate.js')

app.use(cors())
app.use(express.json())    // <==== parse request body as JSON


app.post('/calculate', piAccurator)

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})