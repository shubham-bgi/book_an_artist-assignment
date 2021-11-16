const Wholesaler = require('./wholesaler');
const Retailer = require('./retailer');
const Stock = require('./stock');

Stock.belongsTo(Wholesaler, { 
    as: "Wholesaler", 
    foreignKey: "wholesaler_id"
});
Stock.belongsTo(Retailer, { 
    as: "Retailer", 
    foreignKey: "retailer_id"
});
Wholesaler.hasMany(Stock, {
    as: "Stocks", 
    foreignKey: "wholesaler_id"
});
Retailer.hasMany(Stock, { 
    as: "Stocks", 
    foreignKey: "retailer_id"
});
Wholesaler.belongsToMany(Retailer, {
    through: {
        model: Stock
    },
    foreignKey: "wholesaler_id"
});
Retailer.belongsToMany(Wholesaler, {
    through: {
        model: Stock
    },
    foreignKey: "retailer_id"
});

module.exports= {
    Wholesaler,
    Retailer,
    Stock
}