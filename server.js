var app = require('./config/express')();


app.listen(app.get('port'));