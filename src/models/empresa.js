'use strict';
module.exports = (sequelize, DataTypes) => {
  const Empresa = sequelize.define('Empresa', {
    cnpj: DataTypes.STRING,
    razao: DataTypes.STRING,
    missao: DataTypes.STRING,
    visao: DataTypes.STRING,
    //List de valores

  }, {});
  Empresa.associate = function (models) {
    // associations can be defined here
    Empresa.hasMany(models.Valor, { as: 'valores', foreignKey: 'EmpresaId' })

  };
  return Empresa;
};