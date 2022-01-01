const mongoose = require('mongoose');

const ConventionSchema = new mongoose.Schema({
    conventionName: {
        type: String,
        required: [true, "You must enter a convention name."]
    },
    conventionLocation: {
        type: String,
        required: [true, "You must enter a location for your convention."]
    },
    conventionDate: {
        type: Date,
        required: [true, "Please enter a valid date in this format: YYYY-MM-DD."]
    }
})
