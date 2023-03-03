'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tanggapan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tanggapan.belongsTo(models.pengaduans, {
        foreignKey: "id_pengaduan",
        as: "pengaduans"
      })
    }
  }
  tanggapan.init({
    id_tanggapan: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    id_pengaduan: DataTypes.INTEGER,
    tgl_pengaduan: DataTypes.DATE,
    tanggapan: DataTypes.TEXT,
    id_petugas: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tanggapan',
    underscored: true,
  });
  return tanggapan;
};