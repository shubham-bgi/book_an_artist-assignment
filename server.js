const express = require('express');
const app = express();
require('./database/connection');
require("./models")();
const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log(`Server started on : http://localhost:${PORT}`);
});
app.use(express.json());

app.get('/', (req, res)=>{

})