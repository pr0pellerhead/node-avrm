const user = require('../models/user');

const viewDashboard = (req, res) => {
    user.readAll()
        .then(data => {
            res.render('dashboard', {users: data});
        })
        .catch(err => {
            console.log(err);
            res.status(500).send('internal server error');
        });
}

module.exports = {
    viewDashboard
};