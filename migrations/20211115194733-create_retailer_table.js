'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('retailers', { 
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
          type: Sequelize.STRING,
          allowNull: false
      },
      mobile_number: {
          type: Sequelize.STRING
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    }); 
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('retailers');
  }
};
