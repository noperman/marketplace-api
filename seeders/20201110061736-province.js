'use strict';

const { v4: uuidv4 } = require('uuid');

// helper
const dataProcessing = require("../helper/dataProcessing");
const now = dataProcessing.datePlus7Hours();

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('provinces',[
      {id: uuidv4(), province: 'Nanggroe Aceh Darussalam', createdAt: now, updatedAt: now},
      {id: uuidv4(), province: 'Sumatera Utara', createdAt: now, updatedAt: now},
      {id: uuidv4(), province: 'Sumatera Barat', createdAt: now, updatedAt: now},
      {id: uuidv4(), province: 'Riau', createdAt: now, updatedAt: now},
      {id: uuidv4(), province: 'Kepulauan Riau', createdAt: now, updatedAt: now},
      {id: uuidv4(), province: 'Jambi', createdAt: now, updatedAt: now},
      {id: uuidv4(), province: 'Bengkulu', createdAt: now, updatedAt: now},
      {id: '0af5cafe-7d67-43ee-9935-214af3e8527c', province: 'Sumatera Selatan', createdAt: now, updatedAt: now},
      {id: uuidv4(), province: 'Kepulauan Banka Belitung', createdAt: now, updatedAt: now},
      {id: uuidv4(), province: 'Lampung', createdAt: now, updatedAt: now},
      {id: uuidv4(), province: 'Banten', createdAt: now, updatedAt: now},
      {id: uuidv4(), province: 'DKI Jakarta', createdAt: now, updatedAt: now},
      {id: uuidv4(), province: 'Jawa Barat', createdAt: now, updatedAt: now},
      {id: uuidv4(), province: 'Jawa Tengah', createdAt: now, updatedAt: now},
      {id: uuidv4(), province: 'Jawa Timur', createdAt: now, updatedAt: now},
      {id: uuidv4(), province: 'DI Yogyakarta', createdAt: now, updatedAt: now},
      {id: uuidv4(), province: 'Bali', createdAt: now, updatedAt: now},
      {id: uuidv4(), province: 'Nusa Tenggara Barat', createdAt: now, updatedAt: now},
      {id: uuidv4(), province: 'Nusa Tenggara Timur', createdAt: now, updatedAt: now},
      {id: uuidv4(), province: 'Kalimantan Barat', createdAt: now, updatedAt: now},
      {id: uuidv4(), province: 'Kalimantan Selatan', createdAt: now, updatedAt: now},
      {id: uuidv4(), province: 'Kalimantan Tengah', createdAt: now, updatedAt: now},
      {id: uuidv4(), province: 'Kalimantan Timur', createdAt: now, updatedAt: now},
      {id: uuidv4(), province: 'Kalimantan Utara', createdAt: now, updatedAt: now},
      {id: uuidv4(), province: 'Gorontalo', createdAt: now, updatedAt: now},
      {id: uuidv4(), province: 'Sulawesi Barata', createdAt: now, updatedAt: now},
      {id: uuidv4(), province: 'Sulawesi Selatan', createdAt: now, updatedAt: now},
      {id: uuidv4(), province: 'Sulawesi Tenggara', createdAt: now, updatedAt: now},
      {id: uuidv4(), province: 'Sulawesi Tengah', createdAt: now, updatedAt: now},
      {id: uuidv4(), province: 'Sulawesi Utara', createdAt: now, updatedAt: now},
      {id: uuidv4(), province: 'Maluku', createdAt: now, updatedAt: now},
      {id: uuidv4(), province: 'Maluku Utara', createdAt: now, updatedAt: now},
      {id: uuidv4(), province: 'Papua', createdAt: now, updatedAt: now},
      {id: uuidv4(), province: 'Papua Barat', createdAt: now, updatedAt: now}
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('provinces',null,{});
  }
};
