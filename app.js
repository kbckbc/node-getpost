
const express = require('express')
const app = express()
const port = 3000

// for using public folder as a static pages
// when you set static folder, a default page is 'index.html'
// even if you do not code app.get('/'), index.html will be automatically retrived.
app.use(express.static('public')); 

// for using JSON in request bodies
app.use(express.json({limit:'1mb'}));
app.use(express.urlencoded({extended: true}));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// this code will be executed as long as there is no 'index.html'
// if there is, this will not be called.
// To test out this page, change the name of the 'index.html' to another name.
app.get('/test', (req, res) => {
  res.sendFile(__dirname + "/public/test.html");
});
 
// GET(query) method: http://localhost:3000/get1?fname=Barack&lname=Obama
app.get('/get1', (req, res) => {
  console.log('/get1');
  res.send(`GET: param 'fname' is [${req.query.fname}], 'lname' is [${req.query.lname}]`);
});

// GET(params) method: http://localhost:3000/get2/Donald/Trump
app.get('/get2/:fname/:lname', (req, res) => {
  console.log('/get2');
  res.send(`GET: param 'fname' is [${req.params.fname}], 'lname' is [${req.params.lname}]`);
});

// POST method: http://localhost:3000/post1
app.post('/post1', (req, res) => {
  console.log('/post1');
  res.send(`POST: param 'fname' is [${req.body.fname}], 'lname' is [${req.body.lname}]`);
});


// QUERY method
app.get('/query', (req, res) => {
  console.log('query','req', req.query.name);

  let str = 'Hello, Welcome to Query Page';
  str += `<br>You sent`;
  str += `<br>(${req.query.student_name})`; 
  str += `<br>(${req.query.student_num})`; 
  res.send(str);
});


// SEMANTIC method
app.get('/semantic/:student_name/:student_num', (req, res) => {
  let str = 'Hello, Welcome to Semantic Page';
  str += `<br>You sent`;
  str += `<br>${req.params.student_name}, ${req.params.student_num}`; 
  res.send(str);
});


// POST method
app.post('/post', (req,res) => {
  console.log('req.body', req.body);

  let str = 'Hello, Welcome to Post Page';
  str += `<br>You sent student name: ${req.body.student_name}`;
  str += `<br>You sent student num:${req.body.student_num}`;

  res.send(str);
});


app.post('/fetch', (req,res) => {
  console.log('req.body', req.body);

  let str = 'Hello, Welcome to Fetch Page';
  str += `\nYou sent student name: ${req.body.student_name}`;
  str += `\nYou sent student num:${req.body.student_num}`;

  res.send({str});
});