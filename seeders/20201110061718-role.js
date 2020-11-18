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
    await queryInterface.bulkInsert('roles',[
      {id: '9ae0b56e-822f-4599-a664-350410c387e7',role:"Administrator",createdAt: now,updatedAt: now},
      {id: 'b844cb01-c8ae-4707-8acf-4b599ab5865b',role:"Member",createdAt: now,updatedAt: now}
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
      await queryInterface.bulkDelete('roles',null,{});
  }
};
