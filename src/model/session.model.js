"use strict";
exports.__esModule = true;
exports.Session = void 0;
var mongoose_1 = require("mongoose");
var SessionSchema = new mongoose_1["default"].Schema({
    user: { type: mongoose_1["default"].Schema.Types.ObjectId, ref: "User" },
    vaild: { type: Boolean, "default": true },
    userAgent: { type: String }
}, { timestamps: true });
exports.Session = mongoose_1["default"].model("Session", SessionSchema);
exports["default"] = exports.Session;
