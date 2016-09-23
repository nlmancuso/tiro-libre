#!/usr/bin/env node

var debug = require('debug')('passport-mongo');
var app = require('./app');


<<<<<<< HEAD
app.set('port', process.env.PORT || 3003);


var server = app.listen(app.get('port'), function() {
  //debug('Express server listening on port ' + server.address().port);
console.log('eee')
=======
app.set('port', process.env.PORT || 3001);


var server = app.listen(app.get('port'), function() {
  debug('Express server listening on port ' + server.address().port);
>>>>>>> 398c3cf7d6185e02d4934cf30320ddb113184ad6
});
