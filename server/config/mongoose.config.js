const mongoose = require('mongoose')

module.exports = (db_name) => {
    mongoose.connect(`mongodb://localhost/${db_name}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    })
    .then( () => console.log("Successfully established connection to the database!") )
    .catch( () => console.log("Something went wrong with the database connection!", error) )
}
