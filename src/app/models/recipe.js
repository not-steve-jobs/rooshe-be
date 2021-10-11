import { DataTypes } from'sequelize';
import sequelize from'../configs/database';
import User from './user';

const Recipe = sequelize.define('userRecipe', {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV1,
        unique: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    video: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cover: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cookTime: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    portion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    viewCount: {
        type: DataTypes.STRING,
        defaultValue: 0,
    },
    likeCount: {
        type: DataTypes.STRING,
        defaultValue: 0
    },
    shareCount: {
        type: DataTypes.STRING,
        defaultValue: 0
    },
    commentCount: {
        type: DataTypes.STRING,
        defaultValue: 0
    },
    rating: {
        type: DataTypes.DECIMAL(10,2),
        defaultValue: 0
    },
    reviewCount: {
        type: DataTypes.STRING,
        defaultValue: 0
    },
});

Recipe.associate = () => {
    Recipe.belongsTo(User,{
        foreignKey: {
            name: 'userId',
            allowNull: false
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    });
};

module.exports = Recipe;
