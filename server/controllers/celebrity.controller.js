const Celebrity = require('../models/celebrity.model')

const getAllCelebrities = (req, res) => {
    Celebrity.find({})
        .then(allCelebs => res.json(allCelebs) )
        .catch(err => {
            console.log(err)
            res.status(400).json(err)
        })
}

const getOneCelebrity = (req, res) => {
    Celebrity.findOne({_id: req.params.id} )
        .then(oneCeleb => res.json(oneCeleb) )
        .catch(err => {
            console.log(err)
            res.status(400).json(err)
        })
}

const addNewCelebrity = (req, res) => {
    Celebrity.create(req.body)
        .then(newCeleb => res.json(newCeleb) )
        .catch(err => {
            console.log(err)
            res.status(400).json(err)
        })
}

const updateCelebrity = (req, res) => {
    Celebrity.findOneAndUpdate( {_id: req.params.id}, req.body, {
        new: true,
        runValidators: true,
    })
        .then((updatedCeleb) => res.json(updatedCeleb) )
        .catch(err => {
            console.log(err)
            res.status(400).json(err)
        })
}

const deleteCelebrity = (req, res) => {
    Celebrity.deleteOne( {_id: req.params.id} )
        .then(result => res.json(result) )
        .catch(err => {
            console.log(err)
            res.status(400).json(err)
        })
}

module.exports = {
    getAllCelebrities,
    getOneCelebrity,
    addNewCelebrity,
    updateCelebrity,
    deleteCelebrity,
}
