'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Public extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Public.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    welcomeText: DataTypes.STRING,
    linkInstagram:DataTypes.STRING,
    linkFacebook:DataTypes.STRING,
    linkTwitter:DataTypes.STRING,
    linkWhatsapp:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Public',
  })
  ;
  return Public;
};