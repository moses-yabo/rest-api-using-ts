"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePassword = exports.createUser = void 0;
const lodash_1 = require("lodash");
const user_model_1 = __importDefault(require("../model/user.model"));
async function createUser(input) {
    try {
        return await user_model_1.default.create(input);
    }
    catch (error) {
        throw new Error("error");
    }
}
exports.createUser = createUser;
function findUser() {
}
async function validatePassword({ email, password }) {
    const user = await user_model_1.default.findOne({ email });
    if (!user) {
        return false;
    }
    const isValid = await user.comparePassword(password);
    if (!isValid) {
        return false;
    }
    return (0, lodash_1.omit)(user.toJSON(), "password");
}
exports.validatePassword = validatePassword;
