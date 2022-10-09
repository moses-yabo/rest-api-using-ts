"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Session = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const SessionSchema = new mongoose_1.default.Schema({
    user: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "User" },
    vaild: { type: Boolean, default: true },
    userAgent: { type: String }
}, { timestamps: true });
exports.Session = mongoose_1.default.model("Session", SessionSchema);
exports.default = exports.Session;
