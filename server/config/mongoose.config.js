const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/horror-convention-website", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then( () => console.log("Successfully established connection to the database!") )
    .catch( () => console.log("Something went wrong with the database connection!", error) )
