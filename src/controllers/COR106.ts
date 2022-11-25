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
      get_all_response(data, res)
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
      delete body.codigo;
      const data = await remidep_model.updateOne({codigo: codigo}, body, { runValidators: true });
      edit_response("remidep", data, codigo, res);
    } catch (error) {
      res.json({ msg: error });
    }
  };

  export const deleteRemidep = async (req: Request, res: Response) => {
    try {
      const { codigo } = req.params;
      const data = await remidep_model.deleteOne({ codigo: codigo });
      delete_response("remidep", data, codigo, res)
    } catch (error) {
      res.json({ msg: error });
    }
  };

  export const getRemidepId = async (req: Request, res: Response) => {
    try {
      const { codigo } = req.params
      const data = await remidep_model.findOne({codigo: codigo}, omitirId);
      get_response("remidep", data, codigo, res);
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
        .find({ $or: [
          { codigo: { $regex: dato, $options: "ix" } },
          { descripcion: { $regex: dato, $options: "i" } }
        ] }, omitirId)
        .skip(Number(desde))
        .limit(Number(cantidad));
      console.log(data.length);
      console.log("Ya llegue 2");
      get_all_response(data, res);
    } catch (error) {
      res.json({ msg: error });
    }
  };
  