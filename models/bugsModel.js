const pool = require('../db.js');

class bugs {
    static grabAllIssuesFromProjectFromDb(projectId) {
        return pool.query('SELECT * FROM issues WHERE issues.project_id = $1', [projectId])
    }
}

module.exports = bugs