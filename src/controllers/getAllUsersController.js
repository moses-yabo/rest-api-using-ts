"use strict";
exports.__esModule = true;
var getAllUsersController = function (request, response) {
    var users = [
        {
            name: "Peter",
            age: 30
        },
        {
            name: "Dora",
            age: 31
        },
        {
            name: "Peter",
            age: 30
        }
    ];
    response.statusCode = 200;
    response.send(users);
    console.log(users);
};
exports["default"] = getAllUsersController;
