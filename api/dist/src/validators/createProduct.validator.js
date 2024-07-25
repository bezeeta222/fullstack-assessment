"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const createProductValidator = () => {
    return [
        (0, express_validator_1.body)('name').notEmpty(),
        (0, express_validator_1.body)('upc').notEmpty().isInt().isLength({ min: 12, max: 12 }),
        (0, express_validator_1.body)('brand').notEmpty(),
        (0, express_validator_1.body)('image').notEmpty().isURL(),
    ];
};
const validate = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (errors.isEmpty()) {
        return next();
    }
    const extractedErrors = [];
    errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));
    return res.status(422).json({
        errors: extractedErrors,
    });
};
module.exports = {
    createProductValidator,
    validate,
};
