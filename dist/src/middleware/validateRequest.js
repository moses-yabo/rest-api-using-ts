"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("../logger"));
const validateRequest = (schema) => async (req, res, next) => {
    try {
        await schema.validate({
            body: req.body,
            query: req.query,
            params: req.params
        });
        return next();
    }
    catch (error) {
        logger_1.default.error(error);
        return res.status(400).send(error.errors);
    }
};
exports.default = validateRequest;
