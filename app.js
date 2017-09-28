const express = require('express')
const path = require('path');

const app = express()
app.set('port', (process.env.PORT || 8000))

app.use(express.static(__dirname + '/public'))
app.get('/', (req, res) => {
  res.sendFile(path.join(`${__dirname}/index.html`));
})
app.listen(app.get('port'), () => {
  console.log(`Node app is running on port ${app.get('port')}`)
})
