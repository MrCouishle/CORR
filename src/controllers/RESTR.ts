import { Request, Response } from "express";
import {
    get_response,
    get_all_response,
    omitirId
} from "../global/global";
import { restr_model } from "../models/RESTR";

export const getRestr = async (req:Request, res:Response) => {
    try {
        const { llaveResp, clave } = req.params
        console.log(llaveResp, clave)
        const data = await restr_model.findOne({ llaveResp:llaveResp }, omitirId);
        console.log(data)
         if (data?.llaveRest) {
            if (data.clave == clave) get_all_response(data, res)
            else res.json ({msg:"USER"})
         } else {
            get_all_response(data, res)
         }
    } catch (error) {
        res.json({msg: error});
    }
};