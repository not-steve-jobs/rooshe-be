import { DataTypes } from 'sequelize';
import sequelize from '../configs/database';
// Models
import User from './user';
import Recipe from './recipe';
import UserFollowers from './userFollowers';

const homeCook = sequelize.define('homecook', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    },
    grade: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    status: {
        type: DataTypes.ENUM('active', 'live', 'offline'),
        defaultValue: 'offline'
    },
    profile_video: {
        type: DataTypes.STRING
    },
    review_count: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    comment_count: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    profile_view_count: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    like_count: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    order_count: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    follow_count: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
});

homeCook.associate = () => {
    homeCook.belongsTo(User,{
        foreignKey: {
            name: 'user_id',
            allowNull: false
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    });

    homeCook.hasMany(UserFollowers,{
        foreignKey: {
            name: 'homecook_id',
            allowNull: false
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    });

    homeCook.hasMany(Recipe,{
        foreignKey: {
            name: 'user_id',
            allowNull: false
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    });
};

module.exports = homeCook;
