const {Wholesaler, Retailer} = require('../models');

module.exports = async (req, res)=>{
    
    const {wholesalerId} = req.params;

    const wholesalerDetails = await Wholesaler.findAll({
        where: {
            id: wholesalerId
        },
        include: [Retailer]
    }).catch( err=>{
        console.log('Error :',err)
    });

    res.json(wholesalerDetails);
}