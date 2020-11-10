'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class province extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      province.hasMany(models.districts, {
        foreignKey: 'provinceId',
        as: 'districts',
      });
    }
  };
  province.init({
    province: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'province',
  });
  return province;
};