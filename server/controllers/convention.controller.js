const Convention = require('../models/convention.model')

const getAllConventions = (req, res) => {
    Convention.find({})
        .then(allConventions => res.json(allConventions) )
        .catch(err => {
            console.log(err)
            res.status(400).json(err)
        })
}

const getOneConvention = (req, res) => {
    Convention.findOne( {_id: req.params.id} )
        .then(oneConvention => res.json(oneConvention) )
        .catch(err => {
            console.log(err)
            res.status(400).json(err)
        })
}

const addNewConvention = (req, res) => {
    Convention.create(req.body)
        .then((newConvention) => res.json(newConvention) )
        .catch(err => {
            console.log(err)
            res.status(400).json(err)
        })
}

const updateConvention = (req, res) => {
    Convention.findOneAndUpdate( {_id: req.params.id}, req.body, {
        new: true,
        runValidators: true,
    })
        .then((updatedConvention) => res.json(updatedConvention) )
        .catch(err => {
            console.log(err)
            res.status(400).json(err)
        })
}

const deleteConvention = (req, res) => {
    Convention.deleteOne( {_id: req.params.id} )
        .then(result => res.json(result) )
        .catch(err => {
            console.log(err)
            res.status(400).json(err)
        })
}

module.exports = {
    getAllConventions,
    getOneConvention,
    addNewConvention,
    updateConvention,
    deleteConvention,
}
