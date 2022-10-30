const pool = require('../db.js');

class User {
    static grabAllUsernamesFromDb() {
        return pool.query("SELECT username FROM users")
    }

    static grabUserDataFromDb(name) {
        return pool.query("SELECT * FROM users WHERE username = $1", [name])
    }

    static checkPasswordForUsernameFromDb(name) {
        return pool.query("SELECT password FROM users WHERE username = $1", [name])
    }

    static postUsernameAndPasswordToDb(userId, username, password) {
        return pool.query('INSERT INTO users (user_id, username, password) VALUES ($1, $2, $3) RETURNING *', [userId, username, password])
    }
    static addProjectToUserDb(project_id, user_id) { 
        return pool.query('INSERT INTO users_projects (project_id, user_id) VALUES ($1, $2) RETURNING *', [project_id, user_id])
    }
}

module.exports = User;