'use strict';
module.exports = (sequelize, DataTypes) => {
  const Plano_Acao = sequelize.define('Plano_Acao', {
    que_fazer: DataTypes.STRING,
    pq_fazer: DataTypes.STRING,
    responsavel: DataTypes.STRING,
    como_fazer: DataTypes.STRING,
    local: DataTypes.STRING,
    prazo_final: DataTypes.STRING,
    valor_custo: DataTypes.STRING,

  }, {});
  Plano_Acao.associate = function (models) {
    // associations can be defined here
    this.belongsTo(models.Swot, { foreingKey: 'id' })
    models.Swot.hasMany(models.Plano_Acao, { foreignKey: 'SwotId', onDelete: 'cascade' });

  };
  return Plano_Acao;
};