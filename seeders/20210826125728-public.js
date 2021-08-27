'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('Publics', [{
      name: "Somos Mas",
      image: "https://alkemy-ong.s3-sa-east-1.amazonaws.com/media/LOGOSOMOSMAS.png",
      phone: "+549011123456",
      address: "Avenida SomosMas 4000",
      welcomeText:"Juntos Somos Mas",
      linkInstagram: "https://www.instagram.com/",
      linkFacebook: "https://www.facebook.com/",
      linkTwitter: "https://twitter.com/",
      linkWhatsapp:"https://web.whatsapp.com/",
      createdAt: new Date(),
      updatedAt: new Date()
    }])
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
