'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('complaints', {
      id_pengaduan: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tgl_pengaduan: {
        type: Sequelize.DATE
      },
      nik: {
        type: Sequelize.INTEGER,
        unique:true,
        references: {
          model: "publics",
          key: "nik"
        }
      },
      isi_laporan: {
        type: Sequelize.TEXT
      },
      foto: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.ENUM('0', 'proses', 'selesai')
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('complaints');
  }
};