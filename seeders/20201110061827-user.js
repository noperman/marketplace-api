'use strict';

const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');

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
    await queryInterface.bulkInsert('users',[
      {id: 'bbd435ca-e193-4048-8fed-70de72792ec6', roleId: '9ae0b56e-822f-4599-a664-350410c387e7', subDistrictId: '2a1a3e3f-13b0-469f-9778-623b5bde7e21', firstname: 'Super', lastname: 'Adminsitrator', username: 'developer',email: 'developer803306@gmail.com', password: bcrypt.hashSync('developer123??!!',10), phoneNumber: '+628237363059', address: 'Jl Jenderal A Yani, No 3', active: 1, banned: 0, createdAt: new Date(), updatedAt: new Date()},
      {id: 'f2abbf94-c768-498d-9bd9-755f0c608f83', roleId: 'b844cb01-c8ae-4707-8acf-4b599ab5865b', subDistrictId: '2a1a3e3f-13b0-469f-9778-623b5bde7e21', firstname: 'Member', lastname: 'Member', username: 'member',email: 'developer803306@gmail.com', password: bcrypt.hashSync('developer123??!!',10), phoneNumber: '+628237363059', address: 'Jl Jenderal A Yani, No 3', active: 1, banned: 0, createdAt: new Date(), updatedAt: new Date()}
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users',null,{});
  }
};
