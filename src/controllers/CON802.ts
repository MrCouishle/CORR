import { Request, Response } from "express";
import { get_all_response } from "../global/global";
import { terce_model } from "../models/TERCE";

export const getTerceroF8 = async (req:Request, res:Response)=>{
    try {
        const {desde, cantidad} = req.params
        const {dato} = req.query

        const data = await terce_model.aggregate([
            
        ])

        get_all_response(data, res)
    } catch (error) {
        console.log(error)
        res.json({msg:error})
    }
}