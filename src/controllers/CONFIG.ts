import { Request, Response } from "express";
import { edit_response } from "../global/global";
import { config_model } from "../models/CONFIG";

export const create_config = async (req: Request, res: Response) => {
    try {
        new config_model(req.body).save((err)=>{
            if(err) res.json({msg:err})
            else res.json({N1:"guaradado"})
        })
    } catch (error) {
        res.json({msg:error})
    }
};

export const agregar_contabilidad =async (req:Request, res:Response) => {
    try {
        const {contabilidad} = req.params
        const data = await config_model.updateOne({},{
            $set:{
                ubicacion:{$push:{contabilidad:contabilidad}}
        }})

        edit_response("cofig", data, "", res)
    } catch (error) {
        res.json({msg:error})
    }
}
