import { DataTypes } from 'sequelize';
import { sequelize } from '../../database';

const Product = sequelize.define('Product', {
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
        type: DataTypes.BIGINT
    },
    brand: {
        type: DataTypes.STRING
    },
    image: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'products'
});

export default Product;