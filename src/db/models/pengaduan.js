'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pengaduan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      pengaduan.belongsTo(models.masyarakats, {
        foreignKey: "nik",
        as: "masyarakats"
      })
      pengaduan.hasMany(models.tanggapans, {
        foreignKey: "id_pengaduan"
      })
    }
  }
  pengaduan.init({
    id_pengaduan: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    tgl_pengaduan: DataTypes.DATE,
    nik: DataTypes.INTEGER,
    isi_laporan: DataTypes.TEXT,
    foto: DataTypes.STRING,
    status: DataTypes.ENUM({
      values: ['0', 'proses', 'selesai']
    })
  }, {
    sequelize,
    modelName: 'pengaduan',
    underscored: true,
  });
  return pengaduan;
};