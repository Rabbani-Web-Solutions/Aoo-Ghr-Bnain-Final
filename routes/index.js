

const cors = require('cors');
const session = require('express-session');
const bodyParser = require('body-parser');
const { body, validationResult } = require('express-validator');
const express = require('express');
const app = express();
// const app = require("https-localhost")()
const port = 5000;

const { sendResponse } = require('../app/helpers');
const { fetchAuthorProfile } = require('../app/scotch');

const login = require('./login');
const contact = require('./contact');
const register  = require('./register')
const scrap = require('./webScrapping');
const scrapSteel = require('./scrapSteel');
const save = require('./save')
const change = require('./change')
const updatePass = require('./updatePass')
const getSketch = require('./getSketch')
const delSketch = require('./delSketch')
// const mycheckout = require('./myCheckout')

app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));


app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());



app.use(
    cors({
      origin: 'https://aoo-ghr-bnain-client.vercel.app/',
      credentials: true,
    })
);


/* GET home page. */
app.get('/', function(req, res, next) {
  // res.render('index', { title: 'My Express' });
  res.send('We say Hello')
});


app.get('/scotch', (req, res, next) => {
  // res.send('scotch')
  const author = req.params.author;
  sendResponse(res)(fetchAuthorProfile(author));
});

 // res.render('index', { title: 'My Express' });


app.post('/auth', function(request, response) {
   
    login(request, response);

}
);

// app.post('/rUser', function(request, response) {

//   addUser(request, response);

// }
// );

app.post('/register',  body('email').isEmail(), 

            async (request, response) => {
              const errors = validationResult(request);

              if (!errors.isEmpty()) {

                return response.status(400).send("email must be a valid email address");
              }

   await register(request, response);

}
);

app.post('/contact',body('email').isEmail(), 

function(request, response) {
  const errors = validationResult(request);

  if (!errors.isEmpty()) {

    return response.status(400).send("email must be a valid email address");
  }
   
  contact(request, response);

}
);

app.post('/save', function(request, response) {
   
  save(request, response);

}
);

app.post('/mycheckout', function(request, response) {
   
  console.log("Hiii")
  // mycheckout(request, response);

}
);

app.post('/change', function(request, response) {
   
  change(request, response);

}
);

app.post('/updatePass', function(request, response) {
   
  updatePass(request, response);

}
);

app.post('/getSketch', function(request, response) {
   
  getSketch(request, response);

}
);

app.post('/delSketch', function(request, response) {
   
  delSketch(request, response);

}
);

app.get('/scrap', function(request, response) {
   
  scrap(request, response);

}

);

app.get('/scrapSteel', function(request, response) {
   
  scrapSteel(request, response);

}

);






module.exports = app;

app.listen(port , () => console.log(`Listening on port ${port}!`));
