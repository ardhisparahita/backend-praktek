'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('officers', {
      id_petugas: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama_petugas: {
        type: Sequelize.STRING
      },
      username: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      telp: {
        type: Sequelize.STRING
      },
      level: {
        type: Sequelize.ENUM('admin', 'petugas')
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('officers');
  }
};