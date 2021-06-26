const connection = require('./connection');
var bcrypt = require('bcrypt');

function updatePass(request, response){

const username = request.body.email;

console.log(username);

const role = request.body.role;

console.log(role);

const password = request.body.password;

console.log(password);

if(password.length < 8) {

    return response.status(400).send("password must be atleast 8 characters long");
}
else{
connection.query('SELECT * FROM accounts WHERE email = ? ', [username], function(error, results, fields)
{
    if(results.length>0)
    {
        console.log(results)

        bcrypt.hash(password, 4 , function(err , hash){


            connection.query('UPDATE accounts SET password =  ? , added_By = ? WHERE email = ?',
                        [hash , role , username], function (err, result, fields) {

                            // UPDATE table_name
                            // SET column1 = value1, column2 = value2, ...
                            // WHERE condition;
                       
                            if (err) throw response.status(400).send('error occured')
                        return response.status(200).send("Password Changed Successfully");
            });

            });
        }   
        else{
            return response.status(400).send("Email not found");
        }
});}

}

module.exports = updatePass;