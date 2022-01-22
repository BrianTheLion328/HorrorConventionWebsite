const ConventionController = require('../controllers/convention.controller');

// add in the JWT middleware function "authenticate" = we named it in the jwt.config.js
const { authenticate } = require("../config/jwt.config");

module.exports = (app) => {
    app.get('/api/conventions', authenticate, ConventionController.getAllConventions);
    app.post('/api/conventions', ConventionController.addNewConvention);
    app.get('/api/conventions/:id', ConventionController.getOneConvention);
    app.put('/api/conventions/:id', ConventionController.updateConvention);
    app.delete('/api/conventions/:id', ConventionController.deleteConvention);
}
