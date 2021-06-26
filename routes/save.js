const connection = require('./connection');

var fs = require('fs');

function save (request, response){

const id = request.body.id;

// console.log(email)
let data2 = request.body.data;

let width = request.body.width;

let height = request.body.height;

let name = request.body.name;

let layer = request.body.totalLayer;

let myData =JSON.parse(request.body.data);

var data = {}
data.table = []
for (i=0; i <myData.length ; i++){
   var obj = {
       myData: myData[i]
   }
   data.table.push(obj)
}

connection.query('Insert into sketch (name , sketch ,width , height,layer, user_id) VALUES (? ,?,?, ? , ? , ? )',
                        [name , data2, width , height,layer, id], function (err, result, fields) {
                    
                        if (err) throw response.send('error occured')
                        return response.status(200).send("Sketch Saved Successfully");
            });


// connection.query('SELECT * FROM sketch WHERE email = ?', [email], function(error, results, fields) {
    
//     if(results.length>0){
//         connection.query('UPDATE accounts SET file = ? WHERE email = ?', [data2 , email] , function (err, data) {
           
//             if (err) {
//                 console.log(err)
//                 response.status(400).send('error occured')
//             } else {
//                 response.send('File has been updated successfully')
        
//             }
//         }
//         );
//         // fs.writeFile ("input.json", JSON.stringify(data), function(err) {
//         //     if (err) return response.status(400).send("Some Error Occurred");
//         //     return response.status(200).send("Saved Successfully");
//         //     }
//         // );

//     }
//     else{
//     return response.status(400).send("Subscribed Users are Allowed Only");
//     }
//      });              
    


}

module.exports = save;