'use strict';
module.exports = (sequelize, DataTypes) => {
  const Swot = sequelize.define('Swot', {
    nome: DataTypes.STRING,
    descricao: DataTypes.INTEGER
  }, {});
  Swot.associate = function (models) {
    // associations can be defined here

  };
  return Swot;
};