import { DataTypes, Sequelize, CreationOptional, InferAttributes, InferCreationAttributes, NonAttribute  } from "sequelize";

import { Model } from 'sequelize';
module.exports = (sequelize: Sequelize, DataType: typeof DataTypes) => {
  class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
    declare id: CreationOptional<number>;
    declare firstName: string;
    declare lastName: string;
    declare email: string;
    static associate(models: any) {
      // define association here
    }
  }
  User.init({
    id: {
      type: DataType.INTEGER,
      autoIncrement: true,
      primaryKey: true
    }, firstName: {
      type: DataType.STRING,
      allowNull: false
    },
    lastName: {
      type: DataType.STRING,
      allowNull: false
    },
    email: {
      type: DataType.STRING,
      allowNull: false,
      unique: false
    }
  }, {
    sequelize,
    timestamps: true,
    createdAt: true,
    updatedAt: true,
    modelName: 'User',
  });
  return User;
};