import { DataTypes } from'sequelize';
import sequelize from'../configs/database';
import User from '../modules/user';

const HomeCook = sequelize.define('homeCook', {
    grade: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    profile_video: {
        type: DataTypes.STRING
    },
    profile_photo: {
        type: DataTypes.STRING,
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
};

module.exports = HomeCook;
