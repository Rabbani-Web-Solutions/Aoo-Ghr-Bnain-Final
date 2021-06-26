const connection = require('./connection');

function getSketch(request, response){

const id = request.body.id;

  if (id){
    connection.query('SELECT * FROM sketch WHERE user_id = ?', [id], function(error, results, fields) {
    
        if(results.length>0){
          return response.send(results);
                       
        }
        else return response.status(400).send("No sketches found in your database, Please make one");
        } ) }

  else {
    return response.status(400).send("Something went wrong. Please try again. If problem persists contact admin");

    response.end();
}
console.log("Sketch called");
}



module.exports = getSketch;