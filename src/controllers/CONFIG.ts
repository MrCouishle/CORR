import { Request, Response } from "express";
import { edit_response } from "../global/global";
import { config_model } from "../models/CONFIG";
import { modul_model } from "../models/MODUL";
import { modulos_schema } from "../models/MODULOS";

export const create_config = async (req: Request, res: Response) => {
  try {
    new config_model(req.body).save((err) => {
      if (err) res.json({ msg: err.message });
      else res.json({ N1: "guaradado" });
    });
  } catch (error) {
    res.json({ msg: error });
  }
};

export const agregar_contabilidad = async (req: Request, res: Response) => {
  try {
    const { contabilidad } = req.params;
    const data = await config_model.updateOne(
      {},
      { $push: { ubicacion: { contab: contabilidad } } }
    );

    const modulos = await modulos_schema.find()

    new modul_model({
        contab:contabilidad,
        modulos: modulos
    }).save((err)=>{
        if(err) console.log(err)
        else console.log("merlo caramelo mero nerd xdxdxd")
    })

    edit_response("cofig", data, "", res);
  } catch (error) {
    res.json({ msg: error });
  }
};

export const eliminar_contabilidad = async (req: Request, res: Response) => {
  try {
    const { contabilidad } = req.params;
    const data = await config_model.updateOne(
      {},
      { $pull: { ubicacion: { contab: contabilidad } } }
    );
    edit_response("cofig", data, "", res);
  } catch (error) {
    res.json({ msg: error });
  }
};

export const edit_config = async (req: Request, res: Response) => {
  try {
    const data = await config_model.updateOne({}, req.body);
    edit_response("config", data, "", res);
  } catch (error) {
    res.json({ msg: error });
  }
};

export const get_config = async (req: Request, res: Response) => {
  try {
    // const data = await config_model.aggregate([
    //     {
           
    //     }
    // ])
  } catch (error) {}
};
