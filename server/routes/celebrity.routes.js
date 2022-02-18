const CelebrityController = require('../controllers/celebrity.controller');

// add in the JWT middleware function "authenticate" = we named it in the jwt.config.js
const { authenticate } = require("../config/jwt.config");

module.exports = (app) => {
    app.get('/api/celebrities', CelebrityController.getAllCelebrities);
    app.post('/api/celebrities', authenticate, CelebrityController.addNewCelebrity);
    app.get('/api/celebrities/:id', authenticate, CelebrityController.getOneCelebrity);
    app.put('/api/celebrities/:id', authenticate, CelebrityController.updateCelebrity);
    app.delete('/api/celebrities/:id', authenticate, CelebrityController.deleteCelebrity);
}
