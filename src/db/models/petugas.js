'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class petugas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  petugas.init({
    id_petugas: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    nama_petugas: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    telp: DataTypes.STRING,
    level: DataTypes.ENUM({
      values: ['admin', 'petugas']
    })
  }, {
    sequelize,
    modelName: 'petugas',
    underscored: true,
  });
  return petugas;
};