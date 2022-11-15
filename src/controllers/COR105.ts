import { Request, Response } from "express";
import {
  concatenarCodigos,
  delete_response,
  edit_response,
  get_all_response,
  get_response,
  omitirId,
} from "../global/global";
import { unifun_model } from "../models/UNIFUN";

export const getUnifun = async (req: Request, res: Response) => {
    try {
      const data = await unifun_model.find({}, omitirId);
      if (data) res.json(data);
      else res.json({ msg: 0 });
    } catch (error) {
      res.json({ msg: error });
    }
  };

  export const postUnifun = async (req: Request, res: Response) => {
    console.log(req.body);
    try {
      new unifun_model(req.body).save((err) => {
        if (err) res.json({ msg: err.message });
        else res.json({ N1: "guardado" });
      });
    } catch (error) {
      res.json({ meg: error });
    }
  };

  export const putUnifun = async (req: Request, res: Response) => {
    try {
      const {codigo} = req.params;
      const body = req.body;
      console.log(req.body);
      console.log(body.codigo);
      const data = await unifun_model.updateOne({codigo: codigo}, body, { runValidators: true });
      edit_response("unifun", data, "", res);
    } catch (error) {
      res.json({ msg: error });
    }
  };

  export const deleteUnifun = async (req: Request, res: Response) => {
    try {
      const { codigo } = req.params;
      const data = await unifun_model.deleteOne({ codigo: codigo });
      res.json({msg: data.deletedCount})
    } catch (error) {
      res.json({ msg: error });
    }
  };

  export const getUnifunId = async (req: Request, res: Response) => {
    try {
      const { codigo } = req.params
      const data = await unifun_model.findOne({codigo: codigo}, omitirId);
      if(data) res.json(data)
      else res.json({ msg: 0 });
      console.log("Esta es la data de UnifunID: ", data)
    } catch (error) {
      res.json({ msg: error });
    }
  };

  export const f8Unifun = async (req: Request, res: Response) => {
    try {
      const { desde, cantidad } = req.params;
      let { dato } = req.query;
      console.log("Ya llegue 1");
      const data = await unifun_model
        .find({ $or: [{ codigo: { $regex: dato, $options: "ix" } }] }, omitirId)
        .skip(Number(desde))
        .limit(Number(cantidad));
      console.log(data.length);
      console.log("Ya llegue 2");
      get_all_response(data, res);
    } catch (error) {
      res.json({ msg: error });
    }
  };
  