const express = require("express");
const router = new express.Router();
const MensRanking = require("../models/mens")

router.post("/mens", async(req,res) => {
    try{
        const addMen = new MensRanking(req.body);
        console.log(req.body);
        const insertMen = await addMen.save();
        res.send(insertMen);
    }catch(e){
        res.send(e);
    }
})

router.get("/mens", async (req,res) => {
    try{
        const getMens = await MensRanking.find({});
        res.send(getMens);
    }catch(e){
        res.send(e);
    }

})
router.patch("/mens/:id", async (req,res) => {
    try{
        const _id = req.params.id;
        const updateMens = await MensRanking.findByIdAndUpdate(_id,req.body ,{
            new:true
        });
        res.send(updateMens);
    }catch(e){
        res.send(e);
    }

})

router.delete("/mens/:id", async (req,res) => {
    try{
        const _id = req.params.id;
        const deleteMens = await MensRanking.findByIdAndDelete(_id,req.body, {
            new:true
        });
        res.send(updateMens);
    }catch(e){
        res.send(e);
    }

})

module.exports = router;