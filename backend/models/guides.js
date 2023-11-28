'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Guides extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Guides.belongsTo(models.Countries, {foreignKey: 'countryId'})
    }
  }
  Guides.init({
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    expertise: DataTypes.STRING,
    photo: DataTypes.STRING,
    countryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Guides',
  });
  return Guides;
};