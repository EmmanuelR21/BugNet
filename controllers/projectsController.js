const Project = require('../models/projectsModel.js');

const grabAllProjects = async (request, response) => {
    response.status(200)
    const userid = request.params.user_id
    const projects = await Project.grabAllProjectsOfUserFromDb(userid);
    response.send(projects.rows)
}

module.exports = {
    grabAllProjects
}