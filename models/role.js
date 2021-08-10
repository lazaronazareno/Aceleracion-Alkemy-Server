/* eslint lines-around-directive: "off" */
/* eslint strict: ["off", "global"] */
'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    /* eslint no-unused-vars: "off" */
    static associate(models) {
      Role.belongsTo(models.User, {
        as:'User',
        foreignKey: 'roleId'
      })
    }
  }
  Role.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      deletedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'Role',
      paranoid: true,
    },
  );
  return Role;
};
