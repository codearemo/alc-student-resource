// Importing Modules
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser'); 
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');

mongoose.connect('mongodb://test:test@ds127375.mlab.com:27375/alc-students-resource');
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

// Express Session Middleware
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}));

// Express Messages Middleware
app.use(require('connect-flash')());
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});

// Express Validator Middleware
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
    var namespace = param.split('.')
    , root = namespace.shift()
    , formParam = root;
    
    while(namespace.length) {
      formParam += '[' + namespace + ']';
    }

    return{
      param: formParam,
      msg: msg,
      value: value
    };
  }
}));

// Home Route
app.get('/', (req, res) => {
  Student.find({}, (err, students) => {
    if(err) {
      console.log(err);
    }
    else {
      // I also sorted the list so they can be scanned through easily ;-)
      res.render('dashboard', {students: students.sort((a,b) => a.lastname > b.lastname ? 1 : -1)});
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
  // Validating form
  req.checkBody('firstname', 'Required field(s) is empty').notEmpty();
  req.checkBody('lastname', 'Required field(s) is empty').notEmpty();
  req.checkBody('mobile', 'Required field(s) is empty').notEmpty();
  req.checkBody('dob', 'Required field(s) is empty').notEmpty();
  req.checkBody('email', 'Required field(s) is empty').notEmpty();
  req.checkBody('faculty', 'Required field(s) is empty').notEmpty();
  req.checkBody('dept', 'Required field(s) is empty').notEmpty();
  req.checkBody('level', 'Required field(s) is empty').notEmpty();
  req.checkBody('total', 'Required field(s) is empty').notEmpty();
  req.checkBody('rank', 'Required field(s) is empty').notEmpty();

  // Error(s) check
  var errors = req.validationErrors();

  if(errors) {
    res.render('studentadd', {
      errors: errors
    });
  }
  else {
    // Adding new student resource
    var student = new Student();

    student.firstname = req.body.firstname;
    student.lastname = req.body.lastname;
    student.mobile = req.body.mobile;
    student.dob = req.body.dob;
    student.email = req.body.email;
    student.g = req.body.g;
    student.img = req.body.img;
    student.faculty = req.body.faculty;
    student.dept = req.body.dept;
    student.level = req.body.level;
    student.total = req.body.total;
    student.rank = req.body.rank;
    student.grade = req.body.grade;

    student.save(err => {
      if(err) {
        console.log(err);
        return;
      }
      else {
        // Alert for newly added student resource.
        req.flash('success', 'Student Resource Added.');
        res.redirect('/');
      }
    });
  }
});

// After editing student resourse
app.post('/studentview/edit/:id', urlencodedParser, (req, res) => {
  var student = {};
  student.firstname = req.body.firstname;
  student.lastname = req.body.lastname;
  student.mobile = req.body.mobile;
  student.dob = req.body.dob;
  student.email = req.body.email;
  student.g = req.body.g;
  student.img = req.body.img;
  student.faculty = req.body.faculty;
  student.dept = req.body.dept;
  student.level = req.body.level;
  student.total = req.body.total;
  student.rank = req.body.rank;
  student.grade = req.body.grade;
  
  var query = {_id: req.params.id};

  Student.update(query, student, (err) => {
    if(err) {
      console.log(err);
      return;
    }
    else {
      // Alert for saved edit(s).
      req.flash('primary', 'Student Resource Update Saved.');
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
    // Alert for deleted student resource.
    req.flash('danger', 'Student Resource Deleted.');
    res.send('Success');
  });
});

// Start Server
app.listen(process.env.PORT || 3000, function() {
    console.log("Listening to 127.0.0.1:3000");
});