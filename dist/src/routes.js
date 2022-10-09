"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = require("./controllers/user.controller");
const session_controller_1 = require("./controllers/session.controller");
const validateRequest_1 = __importDefault(require("./middleware/validateRequest"));
const user_schema_1 = __importDefault(require("./schema/user.schema"));
const session_schema_1 = __importDefault(require("./schema/session.schema"));
function default_1(app) {
    app.get("/healthcheck", (req, res) => res.sendStatus(200));
    //Register user
    app.post("/api/users", (0, validateRequest_1.default)(user_schema_1.default), user_controller_1.createUserHandler);
    //Post/api/user
    //login
    app.post("/api/sessions", (0, validateRequest_1.default)(session_schema_1.default, session_controller_1.createUserSessionHandler));
    //Post /api/ user
    // Post api/session
    //get the user's sessions
    //get the user's session //log
    //get api sessions
    //Logout
    //Delete api/sessions
}
exports.default = default_1;
