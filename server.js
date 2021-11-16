const express = require('express');
const app = express();
require('./database/connection');
const PORT = process.env.PORT || 3000;
const routes = require('./routes');

app.listen(PORT, () => {
    console.log(`Server started on : http://localhost:${PORT}`);
});
app.use(express.json());

// API 1:
// Input : wholesaler_id
// Output : wholesaler along with a list of retailers associated.
app.get('/wholesaler/:wholesalerId', (req, res)=>{
    routes.getWholesalerDetails(req,res);
});

// API 2:
// Get a retailer who has single wholesaler
app.get('/singleretailer', (req,res)=>{
    routes.retailerWithSingleWholesaler(req,res);
})

// API 3:
// Total monthly turnover of each wholesaler for a complete year.
app.get('/monthlyturnover', (req,res)=>{
    routes.monthlyTurnover(req,res);
})

// API 4:
// Max turnover of each wholesaler from a single retailer.
app.get('/maxturnover', (req,res)=>{
    routes.maxTurnover(req,res);
})