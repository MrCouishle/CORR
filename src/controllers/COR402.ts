import { Request, Response } from "express";
import {
    concatenarCodigos,
    delete_response,
    get_response,
    get_all_response,
    edit_response,
    omitirId
} from "../global/global";
import { macorr_model } from "../models/MACORR";

export const getMacorr = async (req:Request, res:Response) => {
    try {
        const data = await macorr_model.find({}, omitirId)
        get_all_response(data, res)
    } catch (error) {
        res.json({msg:error})
    }
};

export const postMacorr = async (req:Request, res:Response) => {
    try {
        new macorr_model(req.body).save((err) =>{
          if (err) res.json({ msg: err.message });
          else res.json({ N1: "guardado" });
        })

    } catch(error) {
        res.json({msg:error})
    }
};

export const putMacorr = async (req:Request, res:Response) => {
    try {
        const {cl,codigo} = req.params
        console.log(cl, codigo)
        const llave = {
                cl:cl,
                codigo:Number(codigo)
        }
        const body = req.body;
        delete body.llave;
        const data = await macorr_model.updateOne({llave: llave}, body, {runValidators: true});
        edit_response("macorr", data, `${llave.cl}${llave.codigo}`, res);
    } catch(error) {
        console.log(error)
        res.json({msg:error})
    }
};

export const deleteMacorr = async (req:Request, res:Response) => {
    try {
        const {cl,codigo} = req.params
        console.log(cl, codigo)
        const llave = {
                cl:cl,
                codigo:Number(codigo)
        }
        const data = await macorr_model.deleteOne({llave:llave});
        delete_response("macorr",data, `${llave.cl}${llave.codigo}`, res)
    } catch(error){
        res.json({msg:error})
    }
}

export const getMacorrId = async (req: Request, res: Response) => {
    try {
      const { codigo } = req.params
      const data = await macorr_model.findOne({codigo: codigo}, omitirId);
      get_response("macorr", data, codigo, res);
    } catch (error) {
      res.json({ msg: error });
    }
  };

export const f8Macorr = async (req:Request, res:Response) => {
    try{
    const { desde, cantidad } = req.params;
    let { dato } = req.query
    const data = await macorr_model
        .find({ $or: [
            { codigo:dato},
            { descripcion: { $regex:dato, $options:"i"}},
        ]}, omitirId)
    } catch(error){
        res.json({msg:error})
    }
}