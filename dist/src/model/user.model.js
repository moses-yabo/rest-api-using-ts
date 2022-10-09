"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const config_1 = __importDefault(require("config"));
const userSchema = new mongoose_1.default.Schema({
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true }
}, { timestamps: true });
userSchema.pre("save", async function (next) {
    let user = this;
    //only hash the password  if  it has benn modified
    if (!user.isModified("password"))
        return next();
    // random additional data
    const salt = await bcrypt_1.default.genSalt(config_1.default.get("saltWorkFactor"));
    const hash = await bcrypt_1.default.hashSync(user.password, salt);
    //rEPLACE THE PASSWORD
    user.password = hash;
    return next();
});
//Used for logging in
userSchema.methods.comparePassword = async function (candidatePassword) {
    const user = this;
    return bcrypt_1.default.compare(candidatePassword, user.password).catch((e) => {
        false;
    });
};
const User = mongoose_1.default.model("User", userSchema);
exports.default = User;
