
const express = require('express');
const app = express();
const path = require('path');
console.log(path.join(`${__dirname}/s`))
app.get('/', (req, res) => res.sendFile(path.join(`${__dirname}/build/`)));



app.listen(8000)