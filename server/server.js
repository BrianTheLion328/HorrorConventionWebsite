require("dotenv").config();   // this is new. This turns the .env file on so you can use the variables in this file here.

const express = require('express');
const cookieParser = require("cookie-parser");   // this is new
const app = express();
const cors = require('cors');

app.use( cookieParser() )
app.use( cors( {
    credentials: true,                   // means when you accept it from the React side they will accept it with credentials built in to the request
    origin: "http://localhost:3000"} ) )    // the origin you want to hear from is the React server, which is localhost:3000
app.use( express.json() )
app.use( express.urlencoded( {extended: true} ) )

require('./config/mongoose.config')(process.env.DB_NAME)    // this process.env.DB_NAME is new.

const ConventionRoutes = require('./routes/convention.routes')
ConventionRoutes(app)

const CelebrityRoutes = require('./routes/celebrity.routes')
CelebrityRoutes(app)

const UserRoutes = require('./routes/user.routes')
UserRoutes(app)

app.listen(process.env.DB_PORT, () => console.log("Listening on port: ", process.env.DB_PORT) )   // changed this because of the new .env file

// PORT, Database names, and secrets for token are sensitive and belong in your private .env file
