'use strict';

const { v4: uuidv4 } = require('uuid');

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
      {id: uuidv4(), province: 'Nanggroe Aceh Darussalam', createdAt: new Date(), updatedAt: new Date()},
      {id: uuidv4(), province: 'Sumatera Utara', createdAt: new Date(), updatedAt: new Date()},
      {id: uuidv4(), province: 'Sumatera Barat', createdAt: new Date(), updatedAt: new Date()},
      {id: uuidv4(), province: 'Riau', createdAt: new Date(), updatedAt: new Date()},
      {id: uuidv4(), province: 'Kepulauan Riau', createdAt: new Date(), updatedAt: new Date()},
      {id: uuidv4(), province: 'Jambi', createdAt: new Date(), updatedAt: new Date()},
      {id: uuidv4(), province: 'Bengkulu', createdAt: new Date(), updatedAt: new Date()},
      {id: '0af5cafe-7d67-43ee-9935-214af3e8527c', province: 'Sumatera Selatan', createdAt: new Date(), updatedAt: new Date()},
      {id: uuidv4(), province: 'Kepulauan Banka Belitung', createdAt: new Date(), updatedAt: new Date()},
      {id: uuidv4(), province: 'Lampung', createdAt: new Date(), updatedAt: new Date()},
      {id: uuidv4(), province: 'Banten', createdAt: new Date(), updatedAt: new Date()},
      {id: uuidv4(), province: 'DKI Jakarta', createdAt: new Date(), updatedAt: new Date()},
      {id: uuidv4(), province: 'Jawa Barat', createdAt: new Date(), updatedAt: new Date()},
      {id: uuidv4(), province: 'Jawa Tengah', createdAt: new Date(), updatedAt: new Date()},
      {id: uuidv4(), province: 'Jawa Timur', createdAt: new Date(), updatedAt: new Date()},
      {id: uuidv4(), province: 'DI Yogyakarta', createdAt: new Date(), updatedAt: new Date()},
      {id: uuidv4(), province: 'Bali', createdAt: new Date(), updatedAt: new Date()},
      {id: uuidv4(), province: 'Nusa Tenggara Barat', createdAt: new Date(), updatedAt: new Date()},
      {id: uuidv4(), province: 'Nusa Tenggara Timur', createdAt: new Date(), updatedAt: new Date()},
      {id: uuidv4(), province: 'Kalimantan Barat', createdAt: new Date(), updatedAt: new Date()},
      {id: uuidv4(), province: 'Kalimantan Selatan', createdAt: new Date(), updatedAt: new Date()},
      {id: uuidv4(), province: 'Kalimantan Tengah', createdAt: new Date(), updatedAt: new Date()},
      {id: uuidv4(), province: 'Kalimantan Timur', createdAt: new Date(), updatedAt: new Date()},
      {id: uuidv4(), province: 'Kalimantan Utara', createdAt: new Date(), updatedAt: new Date()},
      {id: uuidv4(), province: 'Gorontalo', createdAt: new Date(), updatedAt: new Date()},
      {id: uuidv4(), province: 'Sulawesi Barata', createdAt: new Date(), updatedAt: new Date()},
      {id: uuidv4(), province: 'Sulawesi Selatan', createdAt: new Date(), updatedAt: new Date()},
      {id: uuidv4(), province: 'Sulawesi Tenggara', createdAt: new Date(), updatedAt: new Date()},
      {id: uuidv4(), province: 'Sulawesi Tengah', createdAt: new Date(), updatedAt: new Date()},
      {id: uuidv4(), province: 'Sulawesi Utara', createdAt: new Date(), updatedAt: new Date()},
      {id: uuidv4(), province: 'Maluku', createdAt: new Date(), updatedAt: new Date()},
      {id: uuidv4(), province: 'Maluku Utara', createdAt: new Date(), updatedAt: new Date()},
      {id: uuidv4(), province: 'Papua', createdAt: new Date(), updatedAt: new Date()},
      {id: uuidv4(), province: 'Papua Barat', createdAt: new Date(), updatedAt: new Date()}
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
