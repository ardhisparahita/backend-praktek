'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('responses', {
      id_tanggapan: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_pengaduan: {
        type: Sequelize.INTEGER,
        unique: true,
        references: {
          model: "complaints",
          key: "id_pengaduan"
        }
      },
      tgl_pengaduan: {
        type: Sequelize.DATE
      },
      tanggapana: {
        type: Sequelize.TEXT
      },
      id_petugas: {
        type: Sequelize.INTEGER,
        unique: true,
        references: {
          model: "officers",
          key: "id_petugas"
        }
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('responses');
  }
};