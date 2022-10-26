const Project = require('../models/projectsModel.js');

const createProjectPage = async (userId) => {
    const projects = await Project.grabAllProjectsOfUser(userId);
    console.log(projects.rows);
}

const createProjectIssues = async (name) => {
    const ID = await Project.grabIdOfProject(name)
    const issues = await Project.grabAllIssuesFromProject(ID)
    console.log(issues.rows)
}