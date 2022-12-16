import { Request, Response } from "express";
import {
  get_all_response,
  get_response,
  edit_response,
  delete_response,
  omitirId,
} from "../global/global";
import { terce_model } from "../models/TERCE";

export const getTerce = async (req:Request, res:Response) =>{
    try {
        const data = await terce_model.find({}, omitirId);
        get_all_response(data, res)
        console.log(data.length);
      } catch (error) {
        console.error(error);
        res.json({ msg: error });
      }
}