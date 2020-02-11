const mongoose = require('mongoose');

const Produkt = mongoose.model(
    'produkti',
    {
        ime: String,
        proizvoditel: String,
        cena: Number,
        tezina: Number,
        parcinja: Number
    },
    'produkti'
);

const readAll = () => {
    return new Promise((success, fail) => {
        Produkt.find({}, (err, data) => {
            if(err){
                return fail(err);
            }
            return success(data);
        });
    });
};

const createNew = (data) => {
    return new Promise((success, fail) => {
        let p = new Produkt(data);
        p.save((err) => {
            if(err){
                return fail(err);
            }
            return success();
        });
    });
};

const remove = (id) => {
    return new Promise((success, fail) => {
        Produkt.deleteOne({_id: id}, (err) => {
            if(err){
                return fail(err);
            }
            return success();
        });
    });
};

const update = (id, data) => {
    return new Promise((success, fail) => {
        Produkt.updateOne({_id: id}, data, (err) => {
            if(err){
                return fail(err);
            }
            return success();
        });
    });
};

module.exports = {
    readAll,
    createNew,
    remove,
    update
};