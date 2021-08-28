'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Entries', [{
      name:'Aire Libre',
      content:'Los sábados en la Sede de Somos Mas aprovechamos los dias de sol para jugar al aire libre y despejar la mente despues de la semana!',
      image:'https://alkemy-ong.s3-sa-east-1.amazonaws.com/media/Foto11.jpeg',
      categoryId:'1',
      updatedAt: new Date(),
      createdAt: new Date()
    },
    {
      name:'Colonia de Vacaciones',
      content:'Empezaron las vacaciones y con los chicos de Somos Mas aprovechamos para ir a disfrutar de la pileta!',
      image:'https://alkemy-ong.s3-sa-east-1.amazonaws.com/media/Foto3.jpeg',
      categoryId:'1',
      updatedAt: new Date(),
      createdAt: new Date()
    },
    {
      name:'Feliz cumple Lu!',
      content:'Un saludo especial para Lu en el día de su cumple. Gracias Lu por el apoyo y el cariño de siempre!',
      image:'https://alkemy-ong.s3-sa-east-1.amazonaws.com/media/Foto4.jpeg',
      categoryId:'1',
      updatedAt: new Date(),
      createdAt: new Date()
    },
    {  
      name:'Juguetes por mas sonrisas',
      image:'https://alkemy-ong.s3-sa-east-1.amazonaws.com/media/Logotipocampa%C3%B1ajuguetes.png',
      content:'Lanzamos una campaña de juguetes para acercar una sonirsa a los niños en su día!',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name:'Clases de apoyo',
      content:'Cada sábado  de 9 a 13 hs en la Sede de Somos Mas nuestros voluntarios ofrecen clases de apoyo',
      image:'https://alkemy-ong.s3-sa-east-1.amazonaws.com/media/Foto6.jpeg',
      categoryId:'1',
      updatedAt: new Date(),
      createdAt: new Date()
    },  
    {
      name:'Expresión Corporal',
      content:'Compartimos con ustedes una imágen del taller de expresión corporal sobre "Equilibrio y Movimiento" que llevamos a cabo este fin de semana',
      image:'https://alkemy-ong.s3-sa-east-1.amazonaws.com/media/Foto10.jpeg',
      categoryId:'1',
      updatedAt: new Date(),
      createdAt: new Date()
    },    
    {}]);
  },

  down: async (queryInterface, Sequelize) => {
   
  }
};
