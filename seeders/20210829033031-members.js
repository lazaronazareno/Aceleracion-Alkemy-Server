'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Members', [{
      name:'Cecilia Mendez',
      image:'https://alkemy-ong.s3-sa-east-1.amazonaws.com/media/Cecilia_Mendez.jpeg'
    },
    {
      name:'Marco Fernandez',
      image:'https://alkemy-ong.s3-sa-east-1.amazonaws.com/media/Marco_Fernandez.jpeg'
    },
    {
      name:'Miriam Rodriguez',
      image:'https://alkemy-ong.s3-sa-east-1.amazonaws.com/media/Miriam_Rodriguez.jpeg'
    },
    {
      name:'María Irola',
      image:'https://alkemy-ong.s3-sa-east-1.amazonaws.com/media/Maria_Irola.jpeg'
    },
    {
      name:'Marita Gómez',
      image:'https://alkemy-ong.s3-sa-east-1.amazonaws.com/media/Marita_Gomez.jpeg'
    },
    {
      name:'Rodrigo Fuente',
      image:'https://alkemy-ong.s3-sa-east-1.amazonaws.com/media/Rodrigo_Fuente.jpeg'
    },
    {
      name:'María García',
      image:'https://alkemy-ong.s3-sa-east-1.amazonaws.com/media/Maria_Garcia.jpeg'
    },   
    {}]);
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
