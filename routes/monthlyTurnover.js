const {Wholesaler, Retailer} = require('../models');

module.exports = async (req, res)=>{
    const wholesalerMonthlyTurnover = await Wholesaler.findAll({
        include: [Retailer]
    })
    res.json(wholesalerDetails);
}