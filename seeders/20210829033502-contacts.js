'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.bulkInsert('Contacts', [{
        name: 'John Doe',
        phone: '12345678',
        email: 'mail@mail.com',
        message: 'Mensaje de contacto 1'
      },
      {
        name: 'John Q',
        phone: '12345678',
        email: 'mail@mail.com',
        message: 'Mensaje de contacto 2'
      },
     {
        name: 'Myriam L',
        phone: '12345678',
        email: 'mail@mail.com',
        message: 'Mensaje de contacto 3'
     }],{});
  
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
