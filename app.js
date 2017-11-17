const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const sassMiddleware = require('node-sass-middleware')
const bodyParser = require('body-parser')
const exphbs  = require('express-handlebars');
const Musics = require('./models/music')
const Program = require('./models/program')

const app = express()

app.set('port', (process.env.PORT || 3000))

var MONGO_URI = 'mongodb://localhost:27017/online-desktop'
mongoose.connect(MONGO_URI, err => {
  if (err){
    console.log(err)
  }
})
app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(sassMiddleware({
  src: path.join(__dirname, '/sass'),
  dest: path.join(__dirname, 'public/css'),
  outputStyle: 'compressed',
  prefix: '/css',
  force: true
}))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.get('/', (req, res) => {
  Program.find({}, (err, programs) => {
    res.render('index', {programs})
  })
})

app.post('/updatemusic', (req, res) =>  {
  let obj = {}
  console.log(console.log('body: ' + JSON.stringify(req.body)))
  res.send(req.body)
// console.log(req.body.name);
//   Musics.findOne({id: req.body.id}, (err, music) => {
//
//     music.name = req.body.name;
//     return music.save()
//   })
})
app.listen(app.get('port'), () => {
  console.log(`Node app is running on port ${app.get('port')}`)
})
