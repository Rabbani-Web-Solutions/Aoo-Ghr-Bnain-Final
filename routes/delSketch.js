const connection = require('./connection');

function delSketch(request, response){

const id = request.body.id;

console.log(id)

  if (id){
    connection.query('DELETE FROM sketch WHERE id = ?', [id], function(error, results, fields) {
    

        if(error){
          return response.status(400).send("Some error occured");
                       
        }
        else return response.send("Successfully Deleted");
        } ) }

  else {
    return response.status(400).send("Something went wrong. Please try again. If problem persists contact admin");

    response.end();
}
console.log("del Sketch called");
}



module.exports = delSketch;