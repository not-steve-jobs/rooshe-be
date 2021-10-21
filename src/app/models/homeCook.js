import { DataTypes } from 'sequelize';
import sequelize from '../configs/database';
// Models
import User from './user';
import UserFollowers from './userFollowers';

const HomeCook = sequelize.define('homecook', {
    grade: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    status: {
        type: DataTypes.ENUM('active', 'live', 'offline')
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

HomeCook.associate = () => {
    HomeCook.belongsTo(User,{
        foreignKey: {
            name: 'user_id',
            allowNull: false
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    });

    HomeCook.hasOne(UserFollowers,{
        foreignKey: {
            name: 'homecook_id',
            allowNull: false
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    });
};

module.exports = HomeCook;
