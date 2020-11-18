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
    await queryInterface.bulkInsert('products',[
      {id: uuidv4(), sellerId: 'f2abbf94-c768-498d-9bd9-755f0c608f83', categoryId: 'fc9f4663-48c8-4ef9-9923-e64d317acb2a', name: 'Bunga Anggrek', prices: 1000000, description: 'Sunt qui elit cillum deserunt duis nisi eiusmod sit magna proident esse labore.', active: 1, createdAt: now, updatedAt: now},
      {id: uuidv4(), sellerId: 'f2abbf94-c768-498d-9bd9-755f0c608f83', categoryId: 'fc9f4663-48c8-4ef9-9923-e64d317acb2a', name: 'Bunga Melati', prices: 200000, description: 'Exercitation consectetur id deserunt irure enim elit sunt duis amet elit occaecat irure consectetur.', active: 1, createdAt: now, updatedAt: now},
      {id: uuidv4(), sellerId: 'f2abbf94-c768-498d-9bd9-755f0c608f83', categoryId: 'fc9f4663-48c8-4ef9-9923-e64d317acb2a', name: 'Bunga Mawar', prices: 300000, description: 'Exercitation consectetur id deserunt irure enim elit sunt duis amet elit occaecat irure consectetur.', active: 1, createdAt: now, updatedAt: now},
      {id: uuidv4(), sellerId: 'f2abbf94-c768-498d-9bd9-755f0c608f83', categoryId: 'fc9f4663-48c8-4ef9-9923-e64d317acb2a', name: 'Bunga Kecubung', prices: 600000, description: 'Exercitation consectetur id deserunt irure enim elit sunt duis amet elit occaecat irure consectetur.', active: 1, createdAt: now, updatedAt: now},
      {id: uuidv4(), sellerId: 'f2abbf94-c768-498d-9bd9-755f0c608f83', categoryId: 'fc9f4663-48c8-4ef9-9923-e64d317acb2a', name: 'Bunga Matahari', prices: 900000, description: 'Exercitation consectetur id deserunt irure enim elit sunt duis amet elit occaecat irure consectetur.', active: 1, createdAt: now, updatedAt: now},
      {id: uuidv4(), sellerId: 'f2abbf94-c768-498d-9bd9-755f0c608f83', categoryId: 'fc9f4663-48c8-4ef9-9923-e64d317acb2a', name: 'Bunga Sepatu', prices: 250000, description: 'Exercitation consectetur id deserunt irure enim elit sunt duis amet elit occaecat irure consectetur.', active: 1, createdAt: now, updatedAt: now},
      {id: uuidv4(), sellerId: 'f2abbf94-c768-498d-9bd9-755f0c608f83', categoryId: 'fc9f4663-48c8-4ef9-9923-e64d317acb2a', name: 'Namanya Bunga', prices: 100000, description: 'Exercitation consectetur id deserunt irure enim elit sunt duis amet elit occaecat irure consectetur.', active: 1, createdAt: now, updatedAt: now},
      {id: uuidv4(), sellerId: 'f2abbf94-c768-498d-9bd9-755f0c608f83', categoryId: 'fc9f4663-48c8-4ef9-9923-e64d317acb2a', name: 'Tes Bunga', prices: 50000, description: 'Exercitation consectetur id deserunt irure enim elit sunt duis amet elit occaecat irure consectetur.', active: 1, createdAt: now, updatedAt: now},
      {id: uuidv4(), sellerId: 'f2abbf94-c768-498d-9bd9-755f0c608f83', categoryId: 'fc9f4663-48c8-4ef9-9923-e64d317acb2a', name: 'Tes Produk', prices: 100000, description: 'Exercitation consectetur id deserunt irure enim elit sunt duis amet elit occaecat irure consectetur.', active: 1, createdAt: now, updatedAt: now}
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('products',null,{});
  }
};
