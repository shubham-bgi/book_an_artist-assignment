const Sequelize = require("sequelize");
const sequelize = require("../database/connection");

module.exports = sequelize.define("wholesaler", {
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
      }
});