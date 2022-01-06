const mongoose = require('mongoose');

// const CelebritySchema = new mongoose.Schema({
//     celebName: {
//         type: String,
//         required: [true, "Please enter a celebrity name."]
//     },
//     celebMovie: {
//         type: String,
//         required: [true, "Please enter what movie this person is famous for."]
//     },
//     celebCharacter: {
//         type: String,
//     },
//     celebPhotoUrl: {
//         type: String,
//     },
//     celebPhotoOp: {
//         type: String,
//     },
//     conventions: []
// }, {timestamps: true} )

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
    },
    // celebrities: [CelebritySchema],
}, {timestamps: true} )

const Convention = mongoose.model("Convention", ConventionSchema)

module.exports = Convention;
