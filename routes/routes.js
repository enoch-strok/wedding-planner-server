const ProjectController = require("../controllers/project");

module.exports = (app) => {
    app.post("/project/add", ProjectController.add);
    app.post("/project/editProject", ProjectController.editProject);
    app.get("/project/all", ProjectController.showAllProject);
    app.delete('/project/delete/:id', ProjectController.deleteProject);
}