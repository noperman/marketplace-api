'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      product.belongsTo(models.user, {
        foreignKey: 'sellerId',
        as: 'seller',
        onDelete: 'CASCADE',
      });
      product.belongsTo(models.productcategory, {
        foreignKey: 'categoryId',
        as: 'productcategory',
        onDelete: 'CASCADE',
      });
    }
  };
  product.init({
    sellerId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    markedBy: DataTypes.TEXT,
    name: DataTypes.STRING,
    pictures: DataTypes.TEXT,
    prices: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'product',
  });
  return product;
};