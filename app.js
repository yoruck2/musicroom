const express = require('express')
const mysql = require('mysql')
const app = express()
const port = 3001


app.engine('html',require('ejs').renderFile);
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('musicroom.html')
  })

app.get('/newjeans', (req, res) => {
    res.render('Newjeans.html')
  })

app.get('/come', (req, res) => {
  res.render('come.html')
})






app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
