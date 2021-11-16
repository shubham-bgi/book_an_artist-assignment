'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('wholesalers', { 
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
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: new Date()
      }
    }); 
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('wholesalers');   
  }
};
