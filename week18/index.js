const express = require('express')
const app = express()

app.use(express.static('static'))

app.listen('80', () => console.log('Server run on port 80'))