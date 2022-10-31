const Project = require('../models/projectsModel.js');
const Bugs = require('../models/bugsModel.js');

const grabBugs = async (request, response) => {
    response.status(200)
    const projectName = request.params.projectName
    const ID = await Project.grabIdOfProjectFromDb(projectName)
    const bugs = await Bugs.grabAllBugsFromDb(ID.rows[0].project_id)
    return response.send(bugs.rows);
}

const grabBugInfo = async (request, response) => {
    response.status(200)
    const name = request.params.name
    const info = await Bugs.grabBugInfoFromDB(name)
    response.send(info.rows)
}

const postBug = async (request, response) => {
    response.status(200)
    const postData = request.body
    let newId = await Bugs.grabLatestIdFromDb()
    let projectId = await Project.grabIdOfProjectFromDb(request.params.projectName)
    newId = +newId.rows[0].max + 1
    const post = await Bugs.postBugInfoToDb(newId, postData.user_id, +projectId.rows[0].project_id, postData.title, postData.description, postData.code)

    return response.send(post.rows)
}

const updateFeedback = async (request, response) => {
    response.status(200)
    const feedbackInfo = request.body
    const feedback = await Bugs.updateBugFeedbackInfoToDb(feedbackInfo.codeFeedback, feedbackInfo.commentFeedback, feedbackInfo.bugDescription)

    return response.send(feedback.rows)
}

const grabBugsOfUser = async (request, response) => {
    response.status(200);
    const userId = request.params.id;
    const bug = await Bugs.grabBugsOfSpecificUserFromDb(userId);
    return response.send(bug.rows);
}

const updateBugStatus = async (request, response) => {
    const newStatus = request.body.status
    const bugId = request.params.id
    const bug = await Bugs.updateBugStatusDb(bugId, newStatus);
    return response.send(bug.rows);
}

const updateCodeAndDescription = async (request, response) => {
    const updatedInfo = request.body
    const updatedBug = await Bugs.updateBugDescriptionAndCodeDb(updatedInfo.description, updatedInfo.code)

    return response.send(updatedBug.rows)
}

module.exports = {
    grabBugs,
    grabBugInfo,
    postBug,
    updateFeedback,
    grabBugsOfUser,
    updateBugStatus,
    updateCodeAndDescription
}