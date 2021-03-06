/* eslint lines-around-directive: "off" */
/* eslint strict: ["off", "global"] */
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
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

  Category.init(
    {
      name: {
        type: DataTypes.STRING,
        unique: true,
      },
      description: DataTypes.STRING,
      deletedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'Category',
    },
  );
  return Category;
};
