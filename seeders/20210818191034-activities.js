'use strict';
module.exports = {

  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('Activities', [{
        name:'Juguetes por mas sonrisas',
        image:'https://alkemy-ong.s3-sa-east-1.amazonaws.com/media/Logotipocampa%C3%B1ajuguetes.png',
        content:'Lanzamos una campaña de juguetes para acercar una sonirsa a los niños en su día!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:'Juntos en la vuelta al cole',
        image:'https://alkemy-ong.s3-sa-east-1.amazonaws.com/media/Logotipocampañamaterialesescolares.png',
        content:'Lanzamos una campaña de materiales escolares para un reotmar las clases super equipados',
        createdAt: new Date(),
        updatedAt: new Date()
      }
  ] ,{});
  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkDelete('Activities', null, {});
  }
 
  };
