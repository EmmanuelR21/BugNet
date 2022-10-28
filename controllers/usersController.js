const { checkPasswordForUsernameFromDb } = require('../models/usersModel.js')
const User = require('../models/usersModel.js')

const grabAllUsernames = async (req, rep) => {
    let data = await User.grabAllUsernamesFromDb()
    rep.send(data.rows)
}

const loginAuthentication = async (req, rep) => {
    let data = await User.grabUserDataFromDb(req.params.name)
    if (data.rows[0]) {
        let password = await User.checkPasswordForUsernameFromDb(req.params.name)
        if (password.rows[0].password === req.params.password) {
            rep.send({ alert: "loged in", data: data.rows[0] })
        } else {
            rep.send({ alert: 'invalid log in' })
        }
    } else {
        rep.send({ alert: "invalid log in" })
    }
}

module.exports = {
    grabAllUsernames,
    loginAuthentication
}