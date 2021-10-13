import { DataTypes } from'sequelize';
import sequelize from'../configs/database';
import User from '../modules/user';

const Homecook = sequelize.define('homecook', {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV1,
        unique: true
    },
    grade: {
        type: DataTypes.STRING,
        defaultValue: 0
    },
    profile_video: {
        type: DataTypes.STRING,
        defaultValue: 0
    },
    profile_photo: {
        type: DataTypes.STRING,
        defaultValue: 0
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
Homecook.associate = () => {
    Homecook.belongsTo(User,{
        foreignKey: {
            name: 'userId',
            allowNull: false
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    });
};

module.exports = Homecook;
