const Sequelize = require("sequelize");

module.exports = sequelize.define("retailer", {
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