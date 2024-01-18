const express=require("express")
const {TokenModel} = require("../model/token.model");
const TokenRoute =  express.Router();

TokenRoute.post("/", async(req,res)=>{
    
    try {
        const token = new TokenModel(req.body);
        await token.save();
        res.status(200).json({message : "Token Added"})
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
})

TokenRoute.get("/", async(req,res)=>{
    try {
        const TokenData = await TokenModel.find();
        res.status(200).json(TokenData )
    } catch (error) {
        res.status(500).send({"error" : error})
    }
})

module.exports={
    TokenRoute
}