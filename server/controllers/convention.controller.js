const Convention = require('../models/convention.model')
const Celebrity = require('../models/celebrity.model')

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
        .populate("celebrities") // this is new
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
        .populate("celebrities")
        .then((updatedConvention) => res.json(updatedConvention) )
        .catch(err => {
            console.log(err)
            res.status(400).json(err)
        })
}

const deleteConvention = (req, res) => {
    // find the convention by their id that is being targeted for deletion.
    Convention.findOne({_id: req.params.id} )
        .then((oneConvention) => {
            // now take that one single convention we targeted and wipe out all the celebrities in that convention.
            Celebrity.deleteMany( {_id: oneConvention.celebrities} )
            .then(result => {
                // finally, NOW you can delete the convention itself after successfully deleting all the celebrities in it first.
                Convention.deleteOne( {_id: req.params.id} )
                .then(result => {
                    res.json(result)
                    console.log("SUCCESS!")
                    // if you dont dump out the celebrities array before deleting, then they are lost in limbo
                    // and can/will screw up your code and other conventions. Delete everything inside a convention
                    // before deleting the convention. Think of it like you empty out a house before you demolish it.
                })
            })
        })
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
