// Importing Modules
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser'); 

mongoose.connect('mongodb://localhost/alc-students-resource');
var db = mongoose.connection;

//Check connection
db.once('open', function() {
  console.log('Connected to db');
});

// Check db error
db.on('error', function() {
  console.log(err);
});

// Initializing App
var app = express();

//Bring in models
var Student = require('./models/dashboard');

// Load View Engine
app.set('view engine', 'pug');


// Loading body-parser middleware
var urlencodedParser = bodyParser.urlencoded({ extended: false });


// Setting static folder
app.use(express.static('./public/'));



// Home Route
app.get('/', (req, res) => {
  Student.find({}, (err, students) => {
    if(err) {
      console.log(err);
    }
    else {
      res.render('dashboard', {students: students});
    }
  });
});

// Student View Route
app.get('/studentview/:id', (req, res) => {
  Student.findById(req.params.id, (err, student) => {
    if(err) {
      console.log(err);
    }
    else {
      res.render('studentview', {student: student});
    }
  });
});

// Student Edit Route
app.get('/studentview/edit/:id', (req, res) => {
  Student.findById(req.params.id, (err, student) => {
    if(err) {
      console.log(err);
      return;
    }
    else {
      res.render('studentedit', {student: student});
    }
  });
});


// Student Add Route
app.get('/student/add', (req, res) => {
  res.render('studentadd');
});


// Submitting Student Add
app.post('/student/add',urlencodedParser, (req, res) => {
  var student = new Student();
  student.name = req.body.name;
  student.mobile = req.body.mobile;
  student.dob = req.body.dob;
  student.g = req.body.g;
  student.img = req.body.img;

  student.save(err => {
    if(err) {
      console.log(err);
      return;
    }
    else {
      res.redirect('/');
    }
  })
});

// After editing student resourse
app.post('/studentview/edit/:id', urlencodedParser, (req, res) => {
  var student = {};
  student.name = req.body.name;
  student.mobile = req.body.mobile;
  student.dob = req.body.dob;
  student.g = req.body.g;
  student.img = req.body.img;
  
  var query = {_id: req.params.id};

  Student.update(query, student, (err) => {
    if(err) {
      console.log(err);
      return;
    }
    else {
      res.redirect('/studentview/'+ query._id);
    }
  });
});

// Deleting Student Resource
app.delete('/studentview/:id', (req, res) => {
  var query = {_id: req.params.id};
  Student.remove(query, err => {
    if(err) {
      console.log(err);
    }
    res.send('Success');
  });
});

// Start Server
app.listen(3000, function() {
    console.log("Listening to 127.0.0.1:3000");
});