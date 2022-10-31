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

    static postBugInfoToDb(bug_id, user_id, project_Id, title, description, code) {
        return pool.query("INSERT INTO bugs (bug_id, user_id, project_id, title, description, code, status ) VALUES ($1, $2, $3, $4, $5, $6,'todo') RETURNING *", [bug_id, user_id, project_Id, title, description, code])
    }

    static updateBugFeedbackInfoToDb(bugCodeFeedback, bugCommentFeedback, bugDescription, bugId) {
        return pool.query('UPDATE bugs SET code_feedback = $1, feedback = $2 WHERE bug_id = $3 RETURNING *', [bugCodeFeedback, bugCommentFeedback, bugId],)
    }

    static grabBugsOfSpecificUserFromDb(userId) {
        return pool.query('SELECT * FROM bugs WHERE user_id = $1', [userId])
    }
    static updateBugStatusDb(bugId, newStatus) {
        return pool.query('UPDATE bugs SET status = $1 WHERE bug_id = $2 RETURNING *', [newStatus, bugId])
    }

    static updateBugDescriptionAndCodeDb(updatedDescription, updatedCode) {
        return pool.query('UPDATE bugs SET description = $1, code = $2 RETURNING *', [updatedDescription, updatedCode])
    }
}

module.exports = Bugs