const Project = require('../models/projectsModel.js');

const grabAllProjects = async (request, response) => {
    response.status(200)
    const userid = request.params.user_id
    const projects = await Project.grabAllProjectsOfUserFromDb(userid);
    response.send(projects.rows)
}

const grabProjectIssues = async (requset, response) => {
    const projectName = requset.params.name
    const ID = await Project.grabIdOfProjectFromDb(projectName)
    const issues = await Project.grabAllIssuesFromProjectFromDb(ID)
    console.log(issues.rows)
}

module.exports = {grabAllProjects, grabProjectIssues}