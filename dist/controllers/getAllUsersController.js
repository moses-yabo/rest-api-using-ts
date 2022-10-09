"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getAllUsersController = (request, response) => {
    const users = [
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
};
exports.default = getAllUsersController;
