const sequelize = require("../database/connection");
const {Wholesaler, Retailer, Stock} = require('../models');

module.exports = async (req, res)=>{
    const eachRetailerTurnover = await Stock.findAll({
        attributes: [
            'wholesaler_id',
            `retailer_id`,
            [
                sequelize.fn('sum', sequelize.col('stock_amount')), 'Turnover'
            ]
        ],
        group : [
            'wholesaler_id', 
            `retailer_id`,
        ],
        order : [
            'wholesaler_id',
            `retailer_id`
        ],
        raw: true,
        include: [
            {
                model: Wholesaler,
                as: 'Wholesaler'
            },
            {
                model: Retailer,
                as: 'Retailer'
            }
    ]
    }).catch( err=>{
        console.log('Error :',err)
    });

    function getWholesalerMaxTurnoverByRetailer(everyRetailerTurnover) {
        let maxTurnoverObj = {};
        for(const value of Object.values(everyRetailerTurnover)){
            if(maxTurnoverObj[value.wholesaler_id]) {
                if(Number(maxTurnoverObj[value.wholesaler_id].Turnover) < Number(value.Turnover)) {
                    maxTurnoverObj[value.wholesaler_id] = value;
                }
            } else {
                maxTurnoverObj[value.wholesaler_id] = value;
            }
        }
        return Object.values(maxTurnoverObj);
    }
   
    res.json(getWholesalerMaxTurnoverByRetailer(eachRetailerTurnover));
}
