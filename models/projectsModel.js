const pool = require('../db.js');

class Project {
    static grabAllProjectsOfUserFromDb(userId) {
        return pool.query('SELECT name FROM users JOIN users_projects ON users.id = users_projects.user_id JOIN projects ON projects.id = users_projects.project_id WHERE users.id = $1', [userId])
    }

    static grabIdOfProjectFromDb(projectName) {
        return pool.query('SELECT id FROM projects WHERE name = $1', [projectName]);
    }

    static grabAllIssuesFromProjectFromDb(projectId) {
        return pool.query('SELECT * FROM issues WHERE issues.project_id = $1', [projectId])
    }
}

module.exports = Project