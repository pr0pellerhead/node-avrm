const c2f = (c = 0) => {
    return (c * 9/5) + 32;
};

const f2c = (f = 0) => {
    return (f - 32) * 5 / 9;
};

// let r = c2f(38);
// console.log(r);

// let ime = 'Bojan'; // pass by value
// let godini = 38; // pass by value
// let profesor = true; // pass by value

// let func = () => { console.log('func'); }; // pass by refference
// let obj = {name: 'Pero', lastName: 'Perovski'}; // pass by refference
// let niza = [1, 2, 3, 4, 5, 6]; // pass by refference

// console.log(ime);
// let i = 'Stojan';
// ime = i;
// console.log(ime);
// i = 'Branko';
// console.log(ime);

// let obj2 = obj;
// console.log(obj2.name);
// console.log(obj.name);
// obj.name = 'Janko';
// console.log(obj.name);
// console.log(obj2.name);

let cb = () => {
    console.log('test');
};

// setInterval(cb, 1000);

function cbTest(callback) {
    callback(); // 'pero'(); 123(); true();
}

// cbTest(cb);

const temp = (t, f) => {
    console.log(f(t));
};

// temp(28, c2f); // 
// temp(82.4, f2c); //


const promiseExample = (num) => {
    return new Promise((success, fail) => {
        // promise logic
        if(num === 0){
            throw "Zero (0) cannot be neither even nor odd";
        }
        if(num % 2 == 0){
            success();
        } else {
            fail();
        }
        // end of promise logic
    });
};

// promiseExample(0)
//     .then(
//         () => {
//             console.log('Success! Number is even!');
//         }
//     )
//     .catch(err => {
//         console.log('An error has occured. ', err);
//     });




// '5' == 5 // true
// '5' === 5 // false

module.exports = {
    c2f,
    f2c,
    cb,
    cbTest,
    temp,
    promiseExample
};