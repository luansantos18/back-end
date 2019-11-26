'use strict';
module.exports = (sequelize, DataTypes) => {
  const Valor = sequelize.define('Valor', {
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING
  }, {

    model: 'Plano_Acoes'
  });
  Valor.associate = function (models) {
    // associations can be defined here
    this.belongsTo(models.Empresa, {
      foreingKey: 'id'
    })
  };
  return Valor;
};