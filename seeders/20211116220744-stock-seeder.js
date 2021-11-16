'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let arrStocks = [];
    for(let i = 1; i <= 12; i++){//from 1 to 12 months
      for(let j = 1; j <= 12; j++){//limiting to 12 stock trades per month
        arrStocks.push({
          "wholesaler_id": Math.floor(Math.random() * (10) + 1),
          "retailer_id": Math.floor(Math.random() * (10) + 1),
          "stock_amount": Math.floor(Math.random() * (100000 - 1000) + 1000),
          "date": new Date('2021', i, '28', '04','20','06','9')
        });
      }
    }
    for(let i = 1; i <= 12; i++){//for retailer id 11 to just have wholesaler 10
      arrStocks.push({
        "wholesaler_id": 10,
        "retailer_id": 11,
        "stock_amount": Math.floor(Math.random() * (25000 - 1000) + 1000),
        "date": new Date('2021', i, '28', '04','20','06','9')
      })
    }
    await queryInterface.bulkInsert('stocks',arrStocks, {});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('stocks', null, {});

  }
};
