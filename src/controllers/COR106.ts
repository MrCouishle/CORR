import { Request, Response } from "express";
import {
  concatenarCodigos,
  delete_response,
  edit_response,
  get_all_response,
  get_response,
  omitirId,
} from "../global/global";
import { remidep_model } from "../models/REMIDEP";

export const getRemidep = async (req: Request, res: Response) => {
    try {
      const data = await remidep_model.find({}, omitirId);
      if (data) res.json(data);
      else res.json({ msg: 0 });
    } catch (error) {
      res.json({ msg: error });
    }
  };

  export const postRemidep = async (req: Request, res: Response) => {
    console.log(req.body);
    try {
      new remidep_model(req.body).save((err) => {
        if (err) res.json({ msg: err.message });
        else res.json({ N1: "guardado" });
      });
    } catch (error) {
      res.json({ meg: error });
    }
  };

  export const putRemidep = async (req: Request, res: Response) => {
    try {
      const {codigo} = req.params;
      const body = req.body;
      console.log(req.body);
      console.log(body.codigo);
      const data = await remidep_model.updateOne({codigo: codigo}, body, { runValidators: true });
      edit_response("remidep", data, "", res);
    } catch (error) {
      res.json({ msg: error });
    }
  };

  export const deleteRemidep = async (req: Request, res: Response) => {
    try {
      const { codigo } = req.params;
      const data = await remidep_model.deleteOne({ codigo: codigo });
      res.json({msg: data.deletedCount})
    } catch (error) {
      res.json({ msg: error });
    }
  };

  export const getRemidepId = async (req: Request, res: Response) => {
    try {
      const { codigo } = req.params
      const data = await remidep_model.findOne({codigo: codigo}, omitirId);
      if(data) res.json(data)
      else res.json({ msg: 0 });
      console.log("Esta es la data de RemidepID: ", data)
    } catch (error) {
      res.json({ msg: error });
    }
  };

  export const f8Remidep = async (req: Request, res: Response) => {
    try {
      const { desde, cantidad } = req.params;
      let { dato } = req.query;
      console.log("Ya llegue 1");
      const data = await remidep_model
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
  