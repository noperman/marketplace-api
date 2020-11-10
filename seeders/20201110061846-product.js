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
    await queryInterface.bulkInsert('products',[
      {id: uuidv4(), sellerId: 'f2abbf94-c768-498d-9bd9-755f0c608f83', categoryId: 'fc9f4663-48c8-4ef9-9923-e64d317acb2a', name: 'Bunga Anggrek', prices: 1000000, description: 'This is my first product', active: 1, createdAt: new Date(), updatedAt: new Date()}
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelet('products',null,{});
  }
};
