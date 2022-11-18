import { Request, Response } from "express";
import { concatenarCodigos, edit_response } from "../global/global";
import { corres_model } from "../models/CORRES";

//corres, terce, tipco

export const postCorres = async (req: Request, res: Response) => {
  try {
    new corres_model(req.body).save((err) => {
      if (err) res.json({ msg: err });
      else res.json({ N1: "guardado" });
    });
  } catch (error) {
    res.json({ msg: error });
  }
};

export const putCorres = async (req:Request, res:Response) =>{
    try {
        const llave = req.body.llave_pon
        delete req.body.llave_pon
        const data = await corres_model.updateOne({llave_pon:llave}, req.body )
        edit_response("corres", data, concatenarCodigos(llave), res);
    } catch (error) {
        
    }
}
