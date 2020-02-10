const fs = require('fs');
const STUDENTS_FILE = './students.json';

const getStudents = (req, res) => {
    fs.readFile(STUDENTS_FILE, 'utf8', (err, data) => {
        if(err){
            console.log('Could not open and read file');
            res.status(500).send('Could not read file');
            return;
        }
        let out = {
            students: JSON.parse(data)
        };
        res.render('students', out);
    });
};

const postStudents = (req, res) => {
    fs.readFile(STUDENTS_FILE, 'utf8', (err, data) => {
        if(err){
            console.log('Could not open and read file');
            res.status(500).send('Could not read file');
            return;
        }
        data = JSON.parse(data);
        data.push({
            id: new Date().getTime(),
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            address: req.body.address,
            avg_grade: Number(req.body.avg_grade)
        });
        data = JSON.stringify(data);
        fs.writeFile(STUDENTS_FILE, data, (err) => {
            if(err){
                console.log('Could not write to file');
                res.status(500).send('Could not write file');
                return;
            }
            res.redirect('/students');
        });
    });
};

module.exports = {
    getStudents,
    postStudents
};