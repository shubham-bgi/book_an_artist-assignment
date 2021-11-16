'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('stocks', { 
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      wholesaler_id: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
      },
      retailer_id: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
      },
      stock_amount: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
      },
      date:{
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.NOW
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    }); 
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('stocks');
  }
};
