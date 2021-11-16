const {Wholesaler, Retailer} = require('../models');

module.exports = async (req, res)=>{
    const {wholesalerId} = req.params;
    const wholesalerDetails = await Wholesaler.findAll({
        where: {
            id: wholesalerId
        },
        include: [Retailer]
    })
    res.json(wholesalerDetails);
}