const connection = require('./connection');

function update (request, response){

const id = request.body.id;

let data2 = request.body.data;

let width = request.body.width;

let height = request.body.height;

let sketchId = request.body.sketchId;

let layer = request.body.totalLayer;

let myData =JSON.parse(request.body.data);


connection.query('UPDATE sketch SET sketch = ? ,width = ?, height = ?,layer = ?, user_id = ? WHERE id = ?',
                        [ data2, width , height,layer, id , sketchId], function (err, result, fields) {

                        if (err) throw response.send('error occured')
                        return response.status(200).send("Sketch Updated Successfully");
            });

}

module.exports = update;
