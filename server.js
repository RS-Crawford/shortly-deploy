var app = require('./server-config.js');

                            // 27017
var port = process.env.PORT || 4658;

app.listen(port);

console.log('Server now listening on port ' + port);
