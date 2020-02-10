const fs = require('fs');
const IMINJA_FILE = './iminja.txt';

const getIminja = (req, res) => {
    fs.readFile(IMINJA_FILE, 'utf8', (err, data) => {
        if(err) {
            console.log('Error reading file');
            res.status(500).send('Could not read file');
            return;
        }
        let out = {
            iminja: data.split(' ')
        };
        res.render('iminja', out);
    });
};

const postIminja = (req, res) => {
    fs.appendFile(IMINJA_FILE, ` ${req.body.ime}`, (err) => {
        if(err){
            console.log('Error appending to file');
            res.status(500).send('Could not append to file');
            return;
        }
        res.redirect('/iminja');
    });
};

module.exports = {
    getIminja,
    postIminja,
};