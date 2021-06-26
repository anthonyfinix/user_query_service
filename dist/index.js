"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// imports
const express_1 = __importDefault(require("express"));
const dbConnect_1 = __importDefault(require("./util/dbConnect"));
const routes_1 = __importDefault(require("./routes"));
const maintenance_1 = __importDefault(require("./routes/maintenance"));
const config_1 = __importDefault(require("./util/config"));
exports.default = async (mongoURI) => {
    let { error: dbError, connection: dbConnection } = await dbConnect_1.default({ mongoURI, options: config_1.default.mongooseOptions });
    const app = express_1.default();
    if (!dbError) {
        app.use(routes_1.default);
    }
    else {
        app.use(maintenance_1.default);
    }
    return app;
};
