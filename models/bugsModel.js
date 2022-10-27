const pool = require('../db.js');

class Bugs {
    static grabAllBugsFromDb(projectId) {
        return pool.query('SELECT * FROM bugs WHERE bugs.project_id = $1', [projectId])
    }
    static grabBugInfoFromDB(bugName) {
        return pool.query('SELECT * FROM bugs WHERE name = $1')
    }
}

module.exports = Bugs