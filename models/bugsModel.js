const pool = require('../db.js');

class Bugs {
    static grabLatestIdFromDb() {
        return pool.query('SELECT MAX(bug_id) FROM bugs')
    }

    static grabAllBugsFromDb(projectId) {
        return pool.query('SELECT * FROM bugs WHERE bugs.project_id = $1', [projectId])
    }

    static grabBugInfoFromDB(bugName) {
        return pool.query('SELECT * FROM bugs WHERE title = $1', [bugName])
    }

    static postBugInfoToDb(bug_id, project_Id, title, description, code) {
        return pool.query("INSERT INTO bugs ( bug_id, project_id, title, description, code, status ) VALUES ($1, $2, $3, $4, $5, 'todo') RETURNING *", [bug_id, project_Id, title, description, code])
    }

    static updateBugFeedbackInfoToDb(bugCodeFeedback, bugCommentFeedback, bugDescription) {
        return pool.query('UPDATE bugs SET code_feedback = $1, feedback = $2 WHERE description = $3 RETURNING *', [bugCodeFeedback, bugCommentFeedback, bugDescription])
    }
}

module.exports = Bugs