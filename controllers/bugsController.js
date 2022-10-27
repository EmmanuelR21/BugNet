const Project = require('../models/projectsModel.js');
const Bugs = require('../models/bugsModel.js');

const grabBugs = async (request, response) => {
    response.status(200)
    const projectName = request.params.name
    const ID = await Project.grabIdOfProjectFromDb(projectName)
    const bugs = await Bugs.grabAllBugsFromDb(ID)
    
    response.send(bugs.rows);
}

module.exports = grabBugs