"use strict";
exports.__esModule = true;
var pino_1 = require("pino");
var dayjs_1 = require("dayjs");
var log = (0, pino_1["default"])({
    transport: {
        target: 'pino-pretty'
    },
    timestamp: function () { return "\"time\":\"".concat((0, dayjs_1["default"])().format(), "\""); }
});
exports["default"] = log;
