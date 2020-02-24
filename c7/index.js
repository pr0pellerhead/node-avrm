const express = require('express');
const bodyParser = require('body-parser');
const db = require('./bootstrap/db');
const movies = require('./handlers/movies');

db.initDB()

let api = express();

api.use(bodyParser.json());

api.get('/movies', movies.getAll);
api.get('/movies/:id', movies.getOne);
api.post('/movies', movies.insert);
api.put('/movies/:id', movies.update);
api.delete('/movies/:id', movies.remove);

api.listen(8080, (err) => {
    if(err){
        console.log(error);
        return;
    }
    console.log('listening on port 8080');
    return;
});
