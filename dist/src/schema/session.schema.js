"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserSessionSchema = void 0;
const yup_1 = require("yup");
exports.createUserSessionSchema = (0, yup_1.object)({
    body: (0, yup_1.object)({
        name: (0, yup_1.string)()
            .required("Name is required")
            .min(6, "Password is too short -should be 6 chars minimum")
            .matches(/^[a-zA-Z0-9_.-]*$/, "Password can only contain letters"),
        passwordConfirmation: (0, yup_1.string)().oneOf([(0, yup_1.ref)("password"), null], "Password must match"),
        email: (0, yup_1.string)()
            .required("Email is required"),
    }),
});
exports.default = exports.createUserSessionSchema;
