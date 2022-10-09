"use strict";
exports.__esModule = true;
var user_controller_1 = require("./controllers/user.controller");
var session_controller_1 = require("./controllers/session.controller");
var validateRequest_1 = require("./middleware/validateRequest");
var user_schema_1 = require("./schema/user.schema");
var session_schema_1 = require("./schema/session.schema");
function default_1(app) {
    app.get("/healthcheck", function (req, res) { return res.sendStatus(200); });
    //Register user
    app.post("/api/users", (0, validateRequest_1["default"])(user_schema_1["default"]), user_controller_1.createUserHandler);
    //Post/api/user
    //login
    app.post("/api/sessions", (0, validateRequest_1["default"])(session_schema_1["default"], session_controller_1.createUserSessionHandler));
    //Post /api/ user
    // Post api/session
    //get the user's sessions
    //get the user's session //log
    //get api sessions
    //Logout
    //Delete api/sessions
}
exports["default"] = default_1;
