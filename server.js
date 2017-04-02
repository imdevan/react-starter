var express = require('express');
var app = express();
var port = process.env.PORT || 8080;


app.use(express.static(__dirname + '/build'));

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/build/index.html')
});

app.listen(port);

console.log('app now listening on ', port);
