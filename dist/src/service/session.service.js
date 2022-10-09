"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAccessToken = exports.createSession = void 0;
const config_1 = __importDefault(require("config"));
const session_model_1 = __importDefault(require("../model/session.model"));
const jwt_utils_1 = require("../jwt.utils");
async function createSession(userId, userAgent) {
    const session = await session_model_1.default.create({ user: userId, userAgent });
    return session.toJSON();
}
exports.createSession = createSession;
function createAccessToken({ user, session }) {
    //build and return the new access Token the new acces token
    const accessToken = (0, jwt_utils_1.sign)({ ...user, session: session._id }, { expiresIn: config_1.default.get("accessTokenTlt") });
    return accessToken;
}
exports.createAccessToken = createAccessToken;
// export interface SessionDocument extends mongoose.Document {
//     user:UserDocument["_id"];
//     vaild:boolean;
//     userAgent:string;
//     createdAt:Date;
//     updatedAt:Date;
// }
// const SessionSchema = new mongoose.Schema({
//     user:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
//     valid:{type:Boolean , default:true},
//     userAgent:{type:String},
// },
// {timestamps:true}
// );
// const User = mongoose.model<SessionDocument>("Session",SessionSchema);
