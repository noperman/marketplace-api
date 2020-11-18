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
    await queryInterface.bulkInsert('districts',[
      {id: '1ef78584-2cd7-42c8-b818-221a73529e59', provinceId:'0af5cafe-7d67-43ee-9935-214af3e8527c',districts: 'Palembang', createdAt: now, updatedAt: now}
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('districts',null,{});
  }
};
