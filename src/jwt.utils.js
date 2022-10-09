"use strict";
exports.__esModule = true;
exports.sign = void 0;
var jsonwebtoken_1 = require("jsonwebtoken");
var config_1 = require("config");
var privateKey = config_1["default"].get('privateKey');
function sign(object, options) {
    return jsonwebtoken_1["default"].sign(object, privateKey, options);
}
exports.sign = sign;
