'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Testimonials', [{
      name: 'Juan Perez',
      image: 'https://alkemy-ong.s3-sa-east-1.amazonaws.com/media/Foto5.jpeg',
      content: 'Gracias a Somos Mas pude retomar mis estudios y conocer grandes personas que hoy son amigos muy queridos'
     }], {});
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
