const pool = require('../db.js');

class Bugs {
    static grabLatestIdFromDb() {
        return pool.query('SELECT MAX(id) FROM bugs')
    }

    static grabAllBugsFromDb(projectId) {
        return pool.query('SELECT * FROM bugs WHERE bugs.project_id = $1', [projectId])
    }

    static grabBugInfoFromDB(bugName) {
        return pool.query('SELECT * FROM bugs WHERE name = $1', [bugName])
    }

    static postBugInfoToDb(id, description, code, projectId) {
        return pool.query("INSERT INTO bugs (id, description, code, status, project_id) VALUES ($1, $2, $3, 'todo', $4) RETURNING *", [id, description, code, projectId])
    }

    static updateBugFeedbackInfoToDb(bugCodeFeedback, bugCommentFeedback, bugDescription) {
        return pool.query('UPDATE bugs SET code_feedback = $1, comment_feedback = $2 WHERE description = $3 RETURNING *', [bugCodeFeedback, bugCommentFeedback, bugDescription])
    }
}

module.exports = Bugs