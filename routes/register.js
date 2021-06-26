const connection = require('./connection');
var bcrypt = require('bcrypt');
const stripe = require("stripe")("sk_test_51IorIIJmpNZTNdrVu6tyr310afztNjqlWPVWWxCQcV8GDDC70i8mQU1oZb0SLEKh1D4gcu2z8eV6SjV72yqzJKql00nnMDPZUa");
const bodyParser = require('body-parser');


async function register(request, response) {

const username = request.body.username;

console.log(request.body.username);

const email = request.body.email;
const password = request.body.password;

const role = request.body.role;
console.log(role)
const amount = request.body.amount;
let ids = request.body.ids;

if(ids === undefined){
    ids = "admin";
}

console.log(amount);
console.log(ids)
if(role === "user"){
try {
    
const payment = await stripe.paymentIntents.create({
    amount,
    currency: "USD",
    description: "Aoo Ghr Bnain Sub",
    payment_method: ids,
    confirm: true
})

console.log("payment :  : " , payment)
console.log("Paid Successfully");

} catch (error) {
 
    return response.status(400).send("Card must be a valid card. For the sake of current Beta version, we want you to use only stripe test cards. Thanks for your inconvinence. Soon you will be able to purchase our services with original cards. But now for testing only");
}
}
if(password.length < 8) {

    return response.status(400).send("password must be atleast 8 characters long");
}
else{
connection.query('SELECT * FROM accounts WHERE email = ? ', [email], function(error, results, fields)
{
    if(results.length>0)
    {
        return response.status(400).send("email you entered is already in use");
    }
    else 
    {

        bcrypt.hash(password, 4 , function(err , hash){


            connection.query('Insert into accounts (username , password , email , added_By, ids) VALUES (?, ? , ? , ?, ?)',
                        [username, hash , email , role, ids], function (err, result, fields) {
                    
                        if (err) throw response.send('error occured')
                        return response.status(200).send("Account Created Successfully");
            });

            });
        }
});}

}

module.exports = register;