require('dotenv').config();
var express = require('express');
var ejsLayouts = require('express-ejs-layouts');
var app = express();
var cloudinary = require('cloudinary');
var multer = require('multer');
var upload = multer({ dest: './uploads' });

app.set('view engine', 'ejs');
app.use(ejsLayouts);

app.get('/', function(req, res) {
  res.render('index');
});

app.post('/', upload.single('inputFile'), function(req, res) {
  cloudinary.uploader.upload(req.file.path, function(result) {
    var cloudID = result.public_id;
    var imageLink = `https://res.cloudinary.com/cclancaster/image/upload/e_sepia:80,q_auto:good/v1582053889/${cloudID}.jpg`
    res.render('result', { image: imageLink });
  })
});

app.listen(3000);

