const movieModel = require('../models/movie');

const getAll = (req, res) => {
    movieModel.readAll()
    .then(data => {
        res.status(200).send(data)
    })
    .catch(err => {
        console.log(err);
        res.status(500).send('internal server error');
    });
};

const getOne = (req, res) => {
    movieModel.readOne(req.params.id)
    .then(data => {
        res.status(200).send(data)
    })
    .catch(err => {
        console.log(err);
        res.status(500).send('internal server error');
    });
};

const insert = (req, res) => {
    movieModel.save(req.body)
    .then(() => {
        res.status(200).send('ok')
    })
    .catch(err => {
        console.log(err);
        res.status(500).send('internal server error');
    });
};

const update = (req, res) => {
    movieModel.update(req.params.id, req.body)
    .then(() => {
        res.status(200).send('ok')
    })
    .catch(err => {
        console.log(err);
        res.status(500).send('internal server error');
    });
};

const remove = (req, res) => {
    movieModel.remove(req.params.id)
    .then(() => {
        res.status(200).send('ok')
    })
    .catch(err => {
        console.log(err);
        res.status(500).send('internal server error');
    });
};

module.exports = {
    getAll,
    getOne,
    insert,
    update,
    remove
};