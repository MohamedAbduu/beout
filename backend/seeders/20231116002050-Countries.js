'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Countries', [{
      createdAt: new Date() ,
      updatedAt: new Date(),
     name: 'Germany',
    },
    {
      createdAt: new Date() ,
      updatedAt: new Date(),
     name: 'India',
    },
    {
      createdAt: new Date() ,
      updatedAt: new Date(),
      name: 'United States',
     },
     {
      createdAt: new Date() ,
      updatedAt: new Date(),
      name: 'Spain',
     },
     {
      createdAt: new Date() ,
      updatedAt: new Date(),
      name: 'France',
     },
     {
      createdAt: new Date() ,
      updatedAt: new Date(),
      name: 'Mexico',
     },
     {
      createdAt: new Date() ,
      updatedAt: new Date(),
      name: 'Morocco',
     },

  ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
