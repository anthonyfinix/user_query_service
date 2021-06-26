"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../util/error/index");
exports.default = async (req, res, next) => {
    let { id } = req.query;
    if (!id)
        return next(new index_1.BadRequest({ message: "  " }));
    return next();
};
