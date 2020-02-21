const viewEditUser = (req, res) => {
    let user_id = req.params.id;
    res.render('user_edit', {user_id: user_id});
}

module.exports = {
    viewEditUser
}