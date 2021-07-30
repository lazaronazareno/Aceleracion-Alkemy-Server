/* eslint lines-around-directive: "off" */
/* eslint strict: ["off", "global"] */
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Entries extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    /* eslint no-unused-vars: "off" */
    static associate(models) {
      // define association here
    }
  }
  Entries.init(
    {
      name: DataTypes.STRING,
      content: DataTypes.STRING,
      image: DataTypes.STRING,
      categoryId: DataTypes.INTEGER,
      type: DataTypes.ENUM({
        values: ['event', 'news'],
      }),
      deletedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'Entries',
    },
  );
  return Entries;
};
