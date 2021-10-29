import { DataTypes } from 'sequelize';
import sequelize from '../configs/database';

const RecipeLikes = sequelize.define('recipe_likes', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    }
});


module.exports = RecipeLikes;
