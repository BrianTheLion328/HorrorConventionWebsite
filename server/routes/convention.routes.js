const ConventionController = require('../controllers/convention.controller');

module.exports = (app) => {
    app.get('/api/conventions', ConventionController.getAllConventions);
    app.post('/api/conventions', ConventionController.addNewConvention);
    app.get('/api/conventions/:id', ConventionController.getOneConvention);
    app.put('/api/conventions/:id', ConventionController.updateConvention);
    app.delete('/api/conventions/:id', ConventionController.deleteConvention);
}
