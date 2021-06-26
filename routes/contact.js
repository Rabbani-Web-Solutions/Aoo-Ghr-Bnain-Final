const connection = require('./connection');

function contact(request, response){

const username = request.body.username;
const email = request.body.email;
const query = request.body.query;

connection.query('Insert into contact (username , email , query) VALUES (?, ? , ?)', [username, email , query] , function (err, data) {
    
    if (err) {
        console.log(err)
        response.status(400).send('error occured')
    } else {
        response.send('Your query has been successfully received. Contact you soon')

    }
}
);

}
module.exports = contact;