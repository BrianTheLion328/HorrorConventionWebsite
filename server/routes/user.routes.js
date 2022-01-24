const userController = require("../controllers/user.controller");

// add in the JWT middleware function "authenticate" = we named it in the jwt.config.js
const { authenticate } = require("../config/jwt.config");

module.exports = (app) => {
    app.post("/api/user/register", userController.register);
    app.post("/api/user/login", userController.login);
    app.post("/api/user/logout", userController.logout);

    // this route now has to be authenticated
    // if this fails authentication, it will return the error
    // if it is successful the "next" method that is called
    // comes from userController
    app.get("/api/user/loggedin", authenticate, userController.getLoggedInUser);
    app.put("/api/user/loggedin", authenticate, userController.addConventionToUser);
};
