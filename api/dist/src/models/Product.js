"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = require("../../database");
const Product = database_1.sequelize.define('Product', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    upc12: {
        type: sequelize_1.DataTypes.BIGINT
    },
    brand: {
        type: sequelize_1.DataTypes.STRING
    },
    image: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    tableName: 'products'
});
exports.default = Product;
