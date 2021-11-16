const {Wholesaler, Retailer} = require('../models');

module.exports = async (req, res)=>{
    const retailers = await Retailer.findAll({
        include: [Wholesaler]
    });
    let singleWholesalerRetailer = retailers
    .filter( element => element.wholesalers.length == 1);
    res.json(singleWholesalerRetailer);
}