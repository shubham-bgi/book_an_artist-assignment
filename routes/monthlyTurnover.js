const sequelize = require('../database/connection');
const {Wholesaler, Retailer, Stock} = require('../models');

module.exports = async (req, res)=>{
    
    const wholesalerMonthlyTurnover = await Stock.findAll({
        attributes: [
            'wholesaler_id',
            [
                sequelize.fn('date_format', sequelize.col('date'),'%M'), 'month'
            ],
            [
                sequelize.fn('sum', sequelize.col('stock_amount')), 'Turnover'
            ]
        ],
        group : [
            'wholesaler_id', 
            [
                sequelize.fn('date_format', sequelize.col('date'),'%M')
            ]
        ],
        order : [
            'wholesaler_id',
            sequelize.literal(//[sequelize.fn('date_format', sequelize.col('date'), '%M')]
                "FIELD(date_format(date, '%M'),'January','February','March','April', 'May', 'June', 'July', 'August','September', 'October', 'November','December')"
            )
            
        ],
        raw: true,
        include: [
            {
            model: Wholesaler,
            as: 'Wholesaler'
        }]
    }).catch( err=>{
        console.log('Error :',err)
    });
    
    res.json(wholesalerMonthlyTurnover);
}