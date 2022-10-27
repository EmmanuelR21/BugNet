const Project = require('../models/projectsModel.js');
const Bugs = require('../models/bugsModel.js');

const grabBugs = async (request, response) => {
    response.status(200)
    const projectName = request.params.name
    const ID = await Project.grabIdOfProjectFromDb(projectName)
    const bugs = await Bugs.grabAllBugsFromDb(ID)
    
    response.send(bugs.rows);
}

const grabBugInfo = async (request, response) => {
    response.status(200)
    const bugName = request.params.name
    const info = await Bugs.grabBugInfoFromDB(bugName)
    response.send(info.rows)
}



module.exports = {
    grabBugs,
    grabBugInfo
}