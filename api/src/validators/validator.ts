import { NextFunction, Request, Response } from "express";
import { body, check, validationResult } from 'express-validator';

export const createProductValidator = () => {
    return [
        body('name')
            .notEmpty()
            .withMessage('The name field cannot be empty.'),
        body('upc12', '123123')
            .notEmpty()
            .withMessage('The upc12 field cannot be empty.')
            .isInt()
            .withMessage('The upc12 field must be an int.')
            .isLength({ min: 12, max: 12 })
            .withMessage('The upc12 field length must be 12.'),
        body('brand')
            .notEmpty()
            .withMessage('The brand field cannot be empty.'),
        body('image')
            .notEmpty()
            .withMessage('The image field cannot be empty.')
            .isURL()
            .withMessage('The image field must be a URL'),
    ]
}

export const updateProductValidator = () => {
    return [
        check('name')
            .notEmpty()
            .withMessage('The name field cannot be empty.'),
        body('upc12', '123123')
            .notEmpty()
            .withMessage('The upc12 field cannot be empty.')
            .isInt()
            .withMessage('The upc12 field must be an int.')
            .isLength({ min: 12, max: 12 })
            .withMessage('The upc12 field length must be 12.'),
        body('brand')
            .notEmpty()
            .withMessage('The brand field cannot be empty.'),
        body('image')
            .notEmpty()
            .withMessage('The image field cannot be empty.')
            .isURL()
            .withMessage('The image field must be a URL'),
    ]
}

export const validate = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return next();
    }
    const extractedErrors: any = [];
    errors.array().map((err) => extractedErrors.push({ [err.type]: err.msg }));

    return res.status(422).json({
        errors: extractedErrors,
    })
}