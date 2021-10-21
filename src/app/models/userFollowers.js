import { DataTypes } from 'sequelize';
import sequelize from '../configs/database';
// Models
import User from './user';
import HomeCook from './homeCook';

const UserFollowers = sequelize.define('user_followers', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    }
});

UserFollowers.associate = () => {
    UserFollowers.belongsTo(User,{
        foreignKey: {
            name: 'user_id',
            allowNull: false
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    });

    UserFollowers.belongsTo(HomeCook,{
        foreignKey: {
            name: 'homecook_id',
            allowNull: false
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    });
};

module.exports = UserFollowers;
