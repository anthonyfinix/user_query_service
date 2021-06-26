"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("../util/config"));
const mongoose_1 = __importStar(require("mongoose"));
;
const schema = new mongoose_1.Schema({
    name: {
        type: {
            first: { type: String, required: true },
            middle: { type: String, required: false },
            last: { type: String, required: true }
        },
        required: true,
        unique: true
    },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    contact_details: { type: mongoose_1.default.Schema.Types.ObjectId, required: true },
    isVerified: {
        type: Boolean,
        required: true,
        default: config_1.default.default_user_verification_state,
    },
    role: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "Role", required: true, default: config_1.default.default_user_role },
});
const User = mongoose_1.model('User', schema);
exports.default = User;
