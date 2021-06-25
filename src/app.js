const express = require("express");
require("./db/conn")
const app = express();
const port = process.env.PORT || 3000;
const router = require("../src/routers/mens")

const MensRanking = require("../src/models/mens");

app.use(express.json());
app.use(router);
// app.get("/" ,async(req,res) => {
//     res.send("hello from other side")
// })




app.listen(port,() => {
    console.log(`connection is live at port no. ${port}`);

}) 