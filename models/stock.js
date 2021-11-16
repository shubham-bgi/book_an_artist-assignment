const Sequelize = require("sequelize");

module.exports = sequelize.define("stock", {
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
        allowNull: false
    }
});