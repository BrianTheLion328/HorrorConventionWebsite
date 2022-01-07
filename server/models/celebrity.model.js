const mongoose = require('mongoose')


const CelebritySchema = new mongoose.Schema({
    celebName: {
        type: String,
        required: [true, "Please enter a celebrity name."]
    },
    celebMovie: {
        type: String,
        required: [true, "Please enter what movie this person is famous for."]
    },
    celebCharacter: {
        type: String,
    },
    celebPhotoUrl: {
        type: String,
    },
    celebPhotoOp: {
        type: String,
    }
}, {timestamps: true} )

const Celebrity = mongoose.model("Celebrity", CelebritySchema)

module.exports = Celebrity
