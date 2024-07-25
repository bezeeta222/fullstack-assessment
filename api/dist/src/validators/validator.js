"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = exports.updateProductValidator = exports.createProductValidator = void 0;
const express_validator_1 = require("express-validator");
const createProductValidator = () => {
    return [
        (0, express_validator_1.body)('name')
            .notEmpty()
            .withMessage('The name field cannot be empty.'),
        (0, express_validator_1.body)('upc12', '123123')
            .notEmpty()
            .withMessage('The upc12 field cannot be empty.')
            .isInt()
            .withMessage('The upc12 field must be an int.')
            .isLength({ min: 12, max: 12 })
            .withMessage('The upc12 field length must be 12.'),
        (0, express_validator_1.body)('brand')
            .notEmpty()
            .withMessage('The brand field cannot be empty.'),
        (0, express_validator_1.body)('image')
            .notEmpty()
            .withMessage('The image field cannot be empty.')
            .isURL()
            .withMessage('The image field must be a URL'),
    ];
};
exports.createProductValidator = createProductValidator;
const updateProductValidator = () => {
    return [
        (0, express_validator_1.check)('name')
            .notEmpty()
            .withMessage('The name field cannot be empty.'),
        (0, express_validator_1.body)('upc12', '123123')
            .notEmpty()
            .withMessage('The upc12 field cannot be empty.')
            .isInt()
            .withMessage('The upc12 field must be an int.')
            .isLength({ min: 12, max: 12 })
            .withMessage('The upc12 field length must be 12.'),
        (0, express_validator_1.body)('brand')
            .notEmpty()
            .withMessage('The brand field cannot be empty.'),
        (0, express_validator_1.body)('image')
            .notEmpty()
            .withMessage('The image field cannot be empty.')
            .isURL()
            .withMessage('The image field must be a URL'),
    ];
};
exports.updateProductValidator = updateProductValidator;
const validate = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (errors.isEmpty()) {
        return next();
    }
    const extractedErrors = [];
    errors.array().map((err) => extractedErrors.push({ [err.type]: err.msg }));
    return res.status(422).json({
        errors: extractedErrors,
    });
};
exports.validate = validate;
