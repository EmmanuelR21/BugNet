const Project = require('../models/projectsModel.js');

const grabProjectBugs = async (request, response) => {
    response.status(200)
    const projectName = request.params.name
    const ID = await Project.grabIdOfProjectFromDb(projectName)
    const issues = await Project.grabAllIssuesFromProjectFromDb(ID)
    console.log(issues.rows)
}

module.exports = grabProjectBugs