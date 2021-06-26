"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../util/error/index");
exports.default = (err, req, res, next) => {
    if (err instanceof index_1.GeneralError)
        return res.status(err.status).json({ error: err.message, details: err.details });
    res.status(400).json({ error: err });
};
