var bcrypt = require('bcryptjs');
var user = require('../models/user');

const viewLogin = (req, res) => {
    res.render('login');
}

const apiLogin = (req, res) => {
    if(req.body.email !== undefined && req.body.email.length > 0 &&
        req.body.password !== undefined && req.body.password.length > 0
    ) {
        user.getByEmail(req.body.email)
            .then(data => {
                if(bcrypt.compareSync(req.body.password, data.password)) {
                    res.redirect('/dashboard');
                } else {
                    res.redirect('/?err=1')
                }
            })
            .catch(err => {
                res.redirect('/?err=2');
            });
    } else {
        res.redirect('/?err=3');
    }
}

const viewRegister = (req, res) => {
    res.render('register');
}

const apiRegister = (req, res) => {
    if(req.body.first_name !== undefined && req.body.first_name.length > 0 &&
        req.body.last_name !== undefined && req.body.last_name.length > 0 &&
        req.body.email !== undefined && req.body.email.length > 0 &&
        req.body.password !== undefined && req.body.password.length > 0 &&
        req.body.password2 !== undefined && req.body.password2.length > 0 &&
        req.body.password2 === req.body.password
    ){
        let hash = bcrypt.hashSync(
            req.body.password, 
            bcrypt.genSaltSync(10)
        );

        user.createNew({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: hash
        })
        .then(() => {
            res.redirect('/');
        })
        .catch(err => {
            console.log(err);
            res.redirect('/register?err=1')
        });
    } else {
        res.redirect('/register?err=2');
    }
}

module.exports = {
    viewLogin,
    apiLogin,
    viewRegister,
    apiRegister
};
