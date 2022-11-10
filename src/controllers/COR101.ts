import { Request, Response } from "express";
import { concatenarCodigos, delete_response, edit_response, get_all_response, get_response, omitirId } from "../global/global";
import { serco_model } from "../models/SERCO";

export const getSerco = async (req:Request, res:Response)=>{
    try {
        const data = await serco_model.find({}, omitirId);
    } catch (error) {
        res.json({msg:error});
    }
}

export const postSerco = async (req:Request, res:Response)=>{
    try {
        new serco_model(req.body).save((err)=>{
            if(err) res.json({msg:err.message})
            else res.json({N1:"guardado"})
        })
    } catch (error) {
        res.json({meg:error});
    }
}

export const putSerco = async (req:Request, res:Response)=>{
    try {
        const {codigo} = req.params;
            const llave = {
                codigo,
            }
            const body = req.body;
            delete body.llave
            const data = await serco_model.updateOne({llave:llave}, body)
            edit_response("serco", data, concatenarCodigos(llave), res);
    } catch (error) {
        res.json({msg:error});
    }
}

export const deleteSerco = async (req:Request, res:Response)=>{
    try {
        const {codigo} = req.params;
            const llave = {
                codigo,
            }
            const data = await serco_model.deleteOne({llave:llave})
            delete_response("serco", data, concatenarCodigos(llave), res);
    } catch (error) {
        res.json({msg:error});
    }
}

export const f8Serco = async (req: Request, res: Response) => {
    try {
      const { desde, cantidad } = req.params;
      let { dato } = req.query;
      let dato2;
      if (Number(dato)) dato2 = Number(dato);
      const data = await serco_model.find({ 
        $or: [
          { "codigo": dato2 },
          {descripcion:{$regex:dato,$options:"ix"}}
        ] 
      }, omitirId)
        .skip(Number(desde))
        .limit(Number(cantidad));
      console.log(data.length);
      get_all_response(data, res);
    } catch (error) {
      res.json({ msg: error });
    }
  };
  