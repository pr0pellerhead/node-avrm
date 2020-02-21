const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const hbs = require('hbs');
var jwt = require('jsonwebtoken');
const db = require('./bootstrap/db');
const users = require('./handlers/users');
const auth = require('./handlers/auth');
const dashboard = require('./handlers/dashboard');
const blogposts = require('./handlers/blogposts'); // create this file

db.initDB();
let app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static('public'));

app.use((req, res, next) => {
    let whitelist = [
        '/',
        '/register'
    ];
    if(!whitelist.includes(req.path)){
        if(req.cookies.jwt){
            jwt.verify(req.cookies.jwt, auth.tokenKey, (err, payload) => {
                if(err){
                    return res.status(401).send('Unauthorized');
                }
                return next();
            })
        } else {
            return res.status(401).send('Unauthorized');
        }
    } else {
        return next();
    }
});

app.set('view engine', 'hbs');


// routes
app.get('/', auth.viewLogin);
app.post('/', auth.apiLogin);

app.get('/register', auth.viewRegister);
app.post('/register', auth.apiRegister);

app.get('/dashboard', dashboard.viewDashboard);

// from here to the end 
app.get('/users/new', users.viewNewUser)
app.post('/users/new', users.apiNewUser)
app.get('/users/edit/:id', users.viewEditUser)
app.post('/users/edit/:id', users.apiEditUser)
app.get('/users/delete/:id', users.apiDeleteUser)

app.get('/blogposts/new', blogposts.viewNewBlogpost)
app.post('/blogposts/new', blogposts.apiNewBlogpost)
app.get('/blogposts/edit/:id', blogposts.viewEditBlogpost)
app.post('/blogposts/edit/:id', blogposts.apiEditBlogpost)
app.get('/blogposts/delete/:id', blogposts.apiDeleteBlogpost)

app.listen(8080, (err) => {
    if(err){
        console.error(err);
        return;
    }
    console.log('Started on port 8080');
});