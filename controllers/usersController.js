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

const addUserInfo = async (request, response) => {
    let userInfo = request.body
    const post = await User.postUsernameAndPasswordToDb(userInfo.id, userInfo.username, userInfo.password)

    return response.send(post.rows)
}

const addProjectToUser = async (request, response) => {
    let project_id = request.body.project_id
    let user_id = request.body.user_id
    let newCollaboration = await User.addProjectToUserDb(project_id, user_id)
    return response.send(newCollaboration.rows)
}
module.exports = {
    grabAllUsernames,
    loginAuthentication,
    addUserInfo,
    addProjectToUser
}