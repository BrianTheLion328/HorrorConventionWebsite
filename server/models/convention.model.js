const mongoose = require('mongoose');

const ConventionSchema = new mongoose.Schema({
    conventionName: {
        type: String,
        required: [true, "You must enter a convention name."]
    },
    conventionCity: {
        type: String,
        required: [true, "You must enter a city."]
    },
    conventionState: {
        type: String,
        required: [true, "Please select a state."]
    },
    conventionDate: {
        type: Date,
        required: [true, "Please enter a valid date in this format: YYYY-MM-DD."]
    }
}, {timestamps: true} )

const Convention = mongoose.model("Convention", ConventionSchema)

module.exports = Convention;
