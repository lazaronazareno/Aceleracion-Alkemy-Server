'use strict';
const bcrypt = require('bcryptjs'); 
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      //Usuarios Regulares//
      {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      password: bcrypt.hashSync('1234', 10),
      roleId: 2,
      deletedAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
      firstName: 'Jack',
      lastName: 'Dawson',
      email: 'jack@example.com',
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      password: bcrypt.hashSync('1234', 10),
      roleId: 2,
      deletedAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
      firstName: "Milena",
      lastName: "Inskipp",
      email: "milena@example.com",
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      password: bcrypt.hashSync('1234', 10), 
      roleId: 2,
      deletedAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      firstName: "Giusto",
      lastName: "Fechnie",
      email: "giusto@example.com",
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      password: bcrypt.hashSync('1234', 10),
      roleId: 2,
      deletedAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      firstName: "Harbert",
      lastName: "Lunnon",
      email: "harbert@example.com",
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      password: bcrypt.hashSync('1234', 10),
      roleId: 2,
      deletedAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      firstName: "Madel",
      lastName: "Casella",
      email: "madel@example.com",
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      password: bcrypt.hashSync('1234', 10),
      roleId: 2,
      deletedAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      firstName: "Jobie",
      lastName: "Surphliss",
      email: "jobie@example.com",
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      password: bcrypt.hashSync('1234', 10),
      roleId: 2,
      deletedAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      firstName: "Wilie",
      lastName: "Druhan",
      email: "wilie@example.com",
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      password: bcrypt.hashSync('1234', 10),
      roleId: 2,
      deletedAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      firstName: "Miltie",
      lastName: "Sepey",
      email: "miltie@example.com",
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      password: bcrypt.hashSync('1234', 10),
      roleId: 2,
      deletedAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      firstName: "Hallie",
      lastName: "Meyer",
      email: "hallie@example.com",
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      password: bcrypt.hashSync('1234', 10),
      roleId: 2,
      deletedAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },

    //Usuarios con Roles de administrador//
    {
      firstName: "Nickolas",
      lastName: "Sherlock",
      email: "nickolas@example.com",
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      password: bcrypt.hashSync('1234', 10),
      roleId: 1,
      deletedAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      firstName: "Georgie",
      lastName: "Subhan",
      email: "georgie@example.com",
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      password: bcrypt.hashSync('1234', 10),
      roleId: 1,
      deletedAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      firstName: "Laurie",
      lastName: "Hazel",
      email: "laurie@example.com",
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      password: bcrypt.hashSync('1234', 10),
      roleId: 1,
      deletedAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      firstName: "Marika",
      lastName: "Pick",
      email: "marika@example.com",
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      password: bcrypt.hashSync('1234', 10),
      roleId: 1,
      deletedAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      firstName: "Chelsea",
      lastName: "Annesley",
      email: "chelsea@example.com",
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      password: bcrypt.hashSync('1234', 10),
      roleId: 1,
      deletedAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      firstName: "Vida",
      lastName: "Fontes",
      email: "vida@example.com",
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      password: bcrypt.hashSync('1234', 10),
      roleId: 1,
      deletedAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      firstName: "Frederic",
      lastName: "Renvoys",
      email: "frederic@example.com",
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      password: bcrypt.hashSync('1234', 10),
      roleId: 1,
      deletedAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      firstName: "Thomas",
      lastName: "Kallstrom",
      email: "thomas@example.com",
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      password: bcrypt.hashSync('1234', 10),
      roleId: 1,
      deletedAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      firstName: "Julia",
      lastName: "Crouch",
      email: "julia@example.com",
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      password: bcrypt.hashSync('1234', 10),
      roleId: 1,
      deletedAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      firstName: "Jacqui",
      lastName: "Sivess",
      email: "jacqui@example.com",
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      password: bcrypt.hashSync('1234', 10),
      roleId: 1,
      deletedAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ])  
},

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
   
  }
};
