"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Sequelize, DataTypes } = require('sequelize');
const database_1 = require("./../../database");
const User = database_1.sequelize.define('Product', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    upc12: {
        type: DataTypes.STRING
    },
    brand: {
        type: DataTypes.STRING
    },
    image: {
        type: DataTypes.STRING
    }
}, {});
