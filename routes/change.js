const connection = require('./connection');

function change(request, response){

const sub = request.body.sub;
const role = request.body.role;

if(role == 'admin' && sub)
{

connection.query('UPDATE changesub SET Subscription = ? WHERE id = ?', [sub, "1"] , function (err, data) {
    


    // UPDATE table_name
    // SET column1 = value1, column2 = value2, ...
    // WHERE condition;


    if (err) {
        console.log(err)
        response.status(400).send('error occured')
    } else {
        response.send('Subscription Charges Successfully Updated')

    }
}
);
}
}
module.exports = change;