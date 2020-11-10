'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class subdistricts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      subdistricts.belongsTo(models.districts, {
        foreignKey: 'districtId',
        as: 'district',
        onDelete: 'CASCADE',
      });
      subdistricts.hasMany(models.user, {
        foreignKey: 'subDistrictId',
        as: 'users',
      });
    }
  };
  subdistricts.init({
    districtId: DataTypes.INTEGER,
    subDistricts: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'subdistricts',
  });
  return subdistricts;
};