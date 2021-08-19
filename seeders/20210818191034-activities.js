'use strict';
module.exports = {

  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('Activities', [{
      name:'Campaña de juguetes',
      image:'https://ponerlaurldeimagenescontenidoopcion1juguetes',
      content:'Juguetes por mas sonrisas',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name:'Campaña de materiales',
      image:'https://ponerlaurldeimagenescontenidoopcion2materiales',
      content:'Juntos en la vuelta al cole',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ] ,{});
  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkDelete('Activities', null, {});
  }
 
  };
