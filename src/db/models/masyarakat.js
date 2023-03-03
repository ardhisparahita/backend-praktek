'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class masyarakat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      masyarakat.hasMany(models.pengaduans, {
        foreignKey: "nik"
      })
    }
  }
  masyarakat.init({
    nik: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    nama: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    telp: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'masyarakat',
    underscored: true,
  });
  return masyarakat;
};