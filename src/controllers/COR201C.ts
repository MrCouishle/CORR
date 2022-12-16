import { Request, Response } from "express";
import {
  get_all_response,
  get_response,
  edit_response,
  delete_response,
  omitirId,
} from "../global/global";
import { terce_model } from "../models/TERCE";

export const getTerce = async (req: Request, res: Response) => {
  try {
    const data = await terce_model.find({}, omitirId);
    get_all_response(data, res);
    console.log(data.length);
  } catch (error) {
    console.error(error);
    res.json({ msg: error });
  }
};

export const postTerce = async (req: Request, res: Response) => {
  try {
    new terce_model(req.body).save((err) => {
      if (err) res.json({ msg: err.message });
      else res.json({ N1: "guardado" });
    });
  } catch (error) {
    console.error(error);
    res.json({ msg: error });
  }
};

export const putTerce = async (req: Request, res: Response) => {
  try {
    const {codigo} = req.params;
    const body = req.body;
    delete body.codigo
    const data = await terce_model.updateOne({codigo: codigo}, body, { runValidators: true });
    edit_response("terce", data, codigo, res);
  } catch (error) {
    console.error(error);
    res.json({ msg: error });
  }
};

export const deleteTerce = async (req:Request, res:Response) =>{
  try {
    const { codigo } = req.params;
    const data = await terce_model.deleteOne({ codigo: codigo });
    delete_response("terce", data, codigo, res)
  } catch (error) {
    console.error(error);
    res.json({msg:error})
  }
};

export const getTerceId = async (req:Request, res:Response) =>{
  try {
    const { codigo } = req.params
    const data = await terce_model.findOne({ codigo }, omitirId);
    get_response("terce", data, codigo, res);
  } catch (error) {
    console.error(error);
    res.json({msg:error});
  }
};
