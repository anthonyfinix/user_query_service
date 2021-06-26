"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../util/error/index");
exports.default = (req, res, next) => {
    return next(new index_1.NotFound({}));
};
