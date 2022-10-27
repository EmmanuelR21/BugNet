const Project = require('../models/projectsModel.js');

const grabAllProjects = async (userId) => {
    const projects = await Project.grabAllProjectsOfUserFromDb(userId);
    console.log(projects.rows);
}

const grabProjectIssues = async (name) => {
    const ID = await Project.grabIdOfProjectFromDb(name)
    const issues = await Project.grabAllIssuesFromProjectFromDb(ID)
    console.log(issues.rows)
}