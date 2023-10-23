
const express = require('express')
const app = express()
const port = 3000

// for using public folder as a static pages
app.use(express.static('public')); 

// for using JSON in request bodies
app.use(express.json({limit:'1mb'}));
app.use(express.urlencoded({extended: true}));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

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
