const pool = require('../db.js');

class User {
    static grabAllUsernamesFromDb() {
        return pool.query("SELECT username FROM users")
    }

    static grabUserDataFromDb(name) {
        pool.query("SELECT * FROM users WHERE username = $1", [name])
    }

    static checkPasswordForUsernameFromDb(name){
        pool.query("SELECT password FROM users WHERE username = $1", [name])
    }
}

module.exports = User;