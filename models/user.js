'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user.belongsTo(models.role,{
        foreignKey: 'roleId',
        as: 'role',
        onDelete: 'CASCADE'
      });
      user.belongsTo(models.subdistricts,{
        foreignKey: 'subDistrictId',
        as: 'subdistrict',
        onDelete: 'CASCADE'
      });
      user.belongsTo(models.product,{
        foreignKey: 'sellerId',
        as: 'productseller',
        onDelete: 'CASCADE'
      });
      user.belongsTo(models.product,{
        foreignKey: 'markedBy',
        as: 'productmarked',
        onDelete: 'CASCADE'
      });
    }
  };
  user.init({
    roleId: DataTypes.INTEGER,
    subDistrictId: DataTypes.INTEGER,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    address: DataTypes.TEXT,
    active: DataTypes.BOOLEAN,
    banned: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};