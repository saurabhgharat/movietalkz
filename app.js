var express = require('express');

var path = require('path');
var cookieParser = require('cookie-parser');

var api = require('./server/routes/api');
var app = express();
var port = process.env.PORT || 8080;
var cors = require('cors');
var mongoose = require('mongoose');

mongoose.connect("mongodb+srv://" + process.env.DB_USERNAME + ":" + process.env.DB_PASSWORD + "@movietalkz-rv84j.mongodb.net/Movietalkz?retryWrites=true",
    { useNewUrlParser: true ,useUnifiedTopology: true }) 


app.use(cors({
    origin: true
}));
const compression = require('compression');

app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.use('/api', api);


app.use(express.static(path.join(__dirname, "dist/movietalkz")));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, "dist/movietalkz/index.html"))
});

app.listen(port, () => {
    console.log("App is running on port " + port);
});
module.exports = app;
