import sequelize from '../../../database.js'
import { DataTypes, Model } from 'sequelize'

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      autoIncrementIdentity: true,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  },
  {
    sequelize,
    tableName: 'users',
    modelName: 'User',
  },
);

export default User;
