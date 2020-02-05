const fs = require('fs');

fs.writeFile('data.txt', 'TEST TEST TEST', (err) => {
    if(err){
        console.log('could not write file');
        return;
    }
    console.log('successfully written to file');

    fs.appendFile('data.txt', 'test test test', (err) => {
        if(err){
            console.log('could not append to file');
            return;
        }
        console.log('append executed successfully');

        fs.readFile('data.txt', 'utf8', (err, data) => {
            if(err){
                console.log('could not read from file');
                return;
            }
            console.log('FILE CONTENTS:');
            console.log(data);
        });
    });
});


const write = (file, content) => {
    return new Promise((success, fail) => {
        fs.writeFile(file, content, (err) => {
            if(err){
                return fail(err);
            }
            return success();
        });
    });
};

const append = (file, content) => {
    return new Promise((success, fail) => {
        fs.appendFile(file, content, (err) => {
            if(err){
                return fail(err);
            }
            return success();
        });
    });
};

const read = (file) => {
    return new Promise((success, fail) => {
        fs.readFile(file, 'utf8', (err, data) => {
            if(err){
                return fail(err);
            }
            return success(data);
        });
    });
};

write('file.txt', 'some content')
    .then(() => {
        return append('file.txt', ' SOME OTHER CONTENT');
    })
    .then(() => {
        return read('file.txt');
    })
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log('an error occurred while writing to file');
    });


let str1 = "eden";
let str2 = 'dva';

let str3 = `tri`; // template string

let ime = 'Bojan';
let pozdrav = `Zdravo, 
jas sum ${ime}`;

console.log(pozdrav);
console.log(pozdrav.length);
let str4 = 'a+b+c+d'; // ['a', 'b', 'c', 'd'] ?
let str4n = str4.split('+');
console.log(str4n);







