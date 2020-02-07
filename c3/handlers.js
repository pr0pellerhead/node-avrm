const index = (req, res) => { // req -> request | res -> response
    res.send('ok');
};

const ime = (req, res) => {
    res.send('pero');
};

const greetings = (req, res) => {
    res.send(req.params.ime);
};

const calc1 = (req, res) => {
    let o = 0;
    switch(req.params.op){
        case 'add':
            o = Number(req.params.a) + Number(req.params.b);
        break;
        case 'sub':
            o = Number(req.params.a) - Number(req.params.b);
        break;
        case 'mul':
            o = Number(req.params.a) * Number(req.params.b);
        break;
        case 'div':
            o = Number(req.params.a) / Number(req.params.b);
        break;
    }
    res.send('' + o);
};

const calc2 = (req, res) => {
    let o = 0;
    switch(req.body.op){
        case 'add':
            o = Number(req.body.a) + Number(req.body.b);
        break;
        case 'sub':
            o = Number(req.body.a) - Number(req.body.b);
        break;
        case 'mul':
            o = Number(req.body.a) * Number(req.body.b);
        break;
        case 'div':
            o = Number(req.body.a) / Number(req.body.b);
        break;
    }
    res.send('' + o);
};

const values = (req, res) => {
    res.send(`response: ${req.body.age}, ${req.body.ime}`);
};

module.exports = {
    index,
    ime,
    greetings,
    calc1,
    calc2,
    values
}