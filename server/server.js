var express = require('express')
var app = express()

app.get('/api/test', function (req, res) {
  res.send(['Hello World!','paulus']);
})


var port = process.env.PORT || 3007;
var server = app.listen(port, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})
