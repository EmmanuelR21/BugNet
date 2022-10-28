const Project = require('../models/projectsModel.js');

const grabAllProjects = async (request, response) => {
    response.status(200)
    const userid = request.params.user_id
    const projects = await Project.grabAllProjectsOfUserFromDb(userid);
    response.send(projects.rows)
}

const postProject = async (request, response) => {
    response.status(200)
    const projectInfo = request.body
    let newId = await Project.grabLatestIdFromDb();
    newId = newId.rows[0].max + 1
    const project = await Project.postProjectInfoToDb(newId, projectInfo.name, projectInfo.description);

    return response.send(project.rows);
}


module.exports = {
    grabAllProjects,
    postProject
}