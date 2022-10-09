"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserSessionHandler = void 0;
const user_services_1 = require("../service/user.services");
const config_1 = __importDefault(require("config"));
const jwt_utils_1 = require("../jwt.utils");
const session_service_1 = require("../service/session.service");
async function createUserSessionHandler(req, res) {
    const user = await (0, user_services_1.validatePassword)(req.body);
    if (!user) {
        //validate the mail and password
        return res.status(401).send("Invalid username or password");
    }
    //Create a session
    const session = await (0, session_service_1.createSession)(user._id, req.get("user-agent") || "");
    //create Access token
    const accessToken = (0, session_service_1.createAccessToken)({
        user,
        session,
    });
    //create refresh token
    const refreshToken = (0, jwt_utils_1.sign)(session, {
        expiresIn: config_1.default.get("refreshTokenTtl"), //1 Year
    });
    //Send refresh & accept token
    return res.send({ accessToken, refreshToken });
}
exports.createUserSessionHandler = createUserSessionHandler;
exports.default = createUserSessionHandler;
