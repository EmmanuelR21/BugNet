const Project = require('../models/projectsModel.js');
const Bugs = require('../models/bugsModel.js');

const grabBugs = async (request, response) => {
    response.status(200)
    const projectName = request.params.projectName
    const ID = await Project.grabIdOfProjectFromDb(projectName)
    const bugs = await Bugs.grabAllBugsFromDb(ID.rows[0].id)
    
    return response.send(bugs.rows);
}

const grabBugInfo = async (request, response) => {
    response.status(200)
    const name = request.params.name
    const info = await Bugs.grabBugInfoFromDB(name)
    response.send(info.rows)
}



module.exports = {
    grabBugs,
    grabBugInfo
}