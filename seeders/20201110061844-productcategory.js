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
    await queryInterface.bulkInsert('productcategories',[
      {id: 'fc9f4663-48c8-4ef9-9923-e64d317acb2a', category:'Tumbuhan', createdAt: now, updatedAt: now},
      {id: uuidv4(), category:'Kerajinan Tangan', createdAt: now, updatedAt: now},
      {id: uuidv4(), category:'Alat Rumah Tangga', createdAt: now, updatedAt: now},
      {id: uuidv4(), category:'Alat Pertanian', createdAt: now, updatedAt: now}
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('productcategories',null,{});
  }
};
