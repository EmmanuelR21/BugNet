const Project = require('../models/projectsModel.js');
const Bugs = require('../models/bugsModel.js');
const { response } = require('express');

const grabBugs = async (request, response) => {
    response.status(200)
    const projectName = request.params.projectName
    const ID = await Project.grabIdOfProjectFromDb(projectName)
    console.log(ID)
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
    //const projectId = await Project.grabIdOfProjectFromDb(postData.projectName)
    let newId = await Bugs.grabLatestIdFromDb()
    newId = +newId.rows[0].max + 1
    const post = await Bugs.postBugInfoToDb(newId, postData.user_id, postData.projectId, postData.title, postData.description, postData.code)

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

module.exports = {
    grabBugs,
    grabBugInfo,
    postBug,
    updateFeedback,
    grabBugsOfUser
}