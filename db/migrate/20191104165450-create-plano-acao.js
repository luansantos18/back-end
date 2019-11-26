'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Plano_Acao', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      que_fazer: {
        type: Sequelize.STRING
      },
      pq_fazer: {
        type: Sequelize.STRING
      },
      responsavel: {
        type: Sequelize.STRING
      },
      como_fazer: {
        type: Sequelize.STRING
      },
      local: {
        type: Sequelize.STRING
      },
      prazo_final: {
        type: Sequelize.STRING
      },
      valor_custo: {
        type: Sequelize.STRING
      },
      SwotId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Swot', key: 'id'

        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',

      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Plano_Acao');
  }
};