const CelebrityController = require('../controllers/celebrity.controller');

module.exports = (app) => {
    app.get('/api/celebrities', CelebrityController.getAllCelebrities);
    app.post('/api/celebrities', CelebrityController.addNewCelebrity);
    app.get('/api/celebrities/:id', CelebrityController.getOneCelebrity);
    app.put('/api/celebrities/:id', CelebrityController.updateCelebrity);
    app.delete('/api/celebrities/:id', CelebrityController.deleteCelebrity);
}
