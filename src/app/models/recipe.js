import { DataTypes } from'sequelize';
import sequelize from'../configs/database';
import User from './user';

const Recipe = sequelize.define('user_recipe', {
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
    cook_time: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    portion: {
        type: DataTypes.SMALLINT,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    view_count: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    like_count: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    share_count: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    comment_count: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    rating: {
        type: DataTypes.DECIMAL(10,2),
        defaultValue: 0
    },
    review_count: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
});

Recipe.associate = () => {
    Recipe.belongsTo(User,{
        foreignKey: {
            name: 'user_id',
            allowNull: false
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    });
};

module.exports = Recipe;
