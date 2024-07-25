"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.update = exports.create = exports.find = exports.findAll = void 0;
const Product_1 = __importDefault(require("../models/Product"));
const sequelize_1 = require("sequelize");
/**
 * Find all the products
 * @param req
 * @param res
 * @returns
 */
const findAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { query } = req;
    const sort = query.sort;
    let sortingField = 'name', sortingOrder = 'ASC';
    if (sort) {
        if ((_a = query === null || query === void 0 ? void 0 : query.sort) === null || _a === void 0 ? void 0 : _a.includes('-')) {
            sortingField = sort.replace(/-/g, "");
            sortingOrder = 'DESC';
        }
        else {
            sortingField = sort;
            sortingOrder = 'ASC';
        }
    }
    try {
        const products = yield Product_1.default.findAll({
            order: [[sortingField, sortingOrder]],
            where: {
                [sequelize_1.Op.and]: [
                    {
                        name: { [sequelize_1.Op.like]: `%${query.filter.name}%` },
                        brand: { [sequelize_1.Op.like]: `%${query.filter.brand}%` },
                    }
                ]
            }
        });
        return res.send(products);
    }
    catch (error) {
        return res.send(error);
    }
});
exports.findAll = findAll;
/**
 * Find a product
 * @param param0
 * @param res
 * @returns
 */
const find = ({ params }, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = params;
    try {
        const product = yield Product_1.default.findOne({ where: { id } });
        return res.send(product);
    }
    catch (error) {
        return res.send(error);
    }
});
exports.find = find;
const create = ({ body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield Product_1.default.create(body);
        return res.send(product);
    }
    catch (error) {
        return res.send(error);
    }
});
exports.create = create;
/**
 * Update a product
 * @param param0
 * @param res
 * @returns
 */
const update = ({ body, params }, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = params;
    try {
        yield Product_1.default.update(body, { where: { id } });
        const product = yield Product_1.default.findOne({ where: { id } });
        return res.send(product);
    }
    catch (error) {
        return res.send(error);
    }
});
exports.update = update;
