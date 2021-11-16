const {Wholesaler, Retailer} = require('../models');

module.exports = async (req, res)=>{
    const retailers = await Retailer.findAll({
        include: [Wholesaler]
    }).catch( err=>{
        console.log('Error :',err)
    });
    
    let singleWholesalerRetailer = retailers
    .filter( element => element.wholesalers.length == 1);

    res.json(singleWholesalerRetailer);
}