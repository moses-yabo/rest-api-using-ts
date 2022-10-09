"use strict";
exports.__esModule = true;
var http_1 = require("http");
var config_1 = require("config");
var express_1 = require("express");
var logger_1 = require("./logger");
var connect_1 = require("./db/connect");
var routes_1 = require("./routes");
var app = (0, express_1["default"])();
var server = new http_1["default"].Server(app);
var port = config_1["default"].get("port");
var host = config_1["default"].get("host");
app.use(express_1["default"].json());
app.use(express_1["default"].urlencoded({ extended: false }));
app.listen(port, host, function () {
    logger_1["default"].info("Server listing at http://".concat(host, ":").concat(port));
    (0, connect_1["default"])();
    (0, routes_1["default"])(app);
});
