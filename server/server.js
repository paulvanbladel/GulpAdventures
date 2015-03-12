var express = require('express')
var app = express()

app.get('/api/test', function (req, res) {
  res.send('Hello World!( dddd !')
})



var server = app.listen(3007, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})
