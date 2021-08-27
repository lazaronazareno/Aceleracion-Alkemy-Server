'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      return Promise.all([
        queryInterface.addColumn('Publics', 'linkInstagram', {
          type: Sequelize.STRING,
          allowNull: true}),
        queryInterface.addColumn('Publics', 'linkFacebook', {
          type: Sequelize.STRING,
          allowNull: true}),
        queryInterface.addColumn('Publics', 'linkTwitter', {
            type: Sequelize.STRING,
            allowNull: true}), 
        queryInterface.addColumn('Publics', 'linkWhatsapp', {
              type: Sequelize.STRING,
              allowNull: true,
        }),
      ]);
   
  },

  down: async (queryInterface) => {
      return Promise.all([queryInterface.removeColumn('Publics', 'linkInstagram'),
      queryInterface.removeColumn('Publics', 'linkFacebook'),
      queryInterface.removeColumn('Publics', 'linkTwitter'),
      queryInterface.removeColumn('Publics', 'linkWhatsapp')]);
    },
   
  }