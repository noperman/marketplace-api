'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class districts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      districts.belongsTo(models.province, {
        foreignKey: 'provinceId',
        as: 'province',
        onDelete: 'CASCADE',
      });
      districts.hasMany(models.subdistricts, {
        foreignKey: 'userId',
        as: 'subdistrict',
      });
    }
  };
  districts.init({
    provinceId: DataTypes.INTEGER,
    districts: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'districts',
  });
  return districts;
};