const connection = require('./connection');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const config = require("config");

function login(request, response){

const username = request.body.userName;
const password = request.body.password;

  if (username && password){
    connection.query('SELECT * FROM accounts WHERE email = ?', [username], function(error, results, fields) {
    
        if(results.length>0){
            // request.session.loggedin = true;
            // request.session.username = username;
            let myJSON = (JSON.stringify(results));
            var obj = JSON.parse(myJSON);
            // response.send(JSON.stringify(obj))
            // console.log(obj[0].username);
            bcrypt.compare(password, obj[0].password, function(err, result) {
              if(result) 
              {console.log(obj[0].email);
              let token = jwt.sign(
                { id: obj[0].id, 
                  name: obj[0].username, 
                  email: obj[0].email, 
                  role: obj[0].role,
                  added_By: obj[0].added_By } , 
                'privateKey'
              );
                response.send(token);             
              }
              else
              {
                return response.status(400).send("Password incorrect!");  
             }
             response.end();
         });              
        }
        else return response.status(400).send("email doesn't exist");
        } ) }

  else {
    return response.status(400).send("Please Enter email and password");

    response.end();
}
console.log("auth called");
}



module.exports = login;