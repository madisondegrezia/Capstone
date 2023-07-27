const express = require("express");
const app = express();
const port = 4000;

app.get('/', (req, res)=>{
    res.send('Testing for the node!!!');
})

app.listen(port, ()=>{
    console.log(`Server is running at http://localhost:${port}`);
});

// npx sequelize-cli model:generate --name User --attributes username:string,email:string,password:string,hasRestaurant:boolean
