import { Request, Response } from "express";
import {
  delete_response,
  edit_response,
  get_all_response,
} from "../global/global";
import { config_model } from "../models/CONFIG";
import { modul_model } from "../models/MODUL";
import { modulos_schema } from "../models/MODULOS";

export const agregar_modulo = async (req: Request, res: Response) => {
  try {
    new modulos_schema(req.body).save(async (err) => {
      if (err) res.send({ msg: err });
      else {
        const data = await modul_model.updateMany(
          {},
          {
            $push: {
              modulos: {
                cod: req.body.cod,
                descripcion: req.body.descripcion,
                estado: false,
              },
            },
          }
        );

        console.log(data);
        res.json({ N1: "guardado" });
      }
    });
  } catch (error) {
    res.json({ msg: error });
  }
};

export const editar_modulo = async (req: Request, res: Response) => {
  try {
    const { cod } = req.body;

    const modulo = await modulos_schema.findOne({cod:cod})
    const data = await modulos_schema.updateOne(
      { cod: cod },
      {
        $set: {
          descripcion: req.body.descripcion,
          estado: req.body.estado,
        },
      }
    );

    if(! data.acknowledged === false){

        const data2 = await modul_model.updateMany(
            {},
            {
              $pull: {
                modulos: {
                  cod: modulo?.cod,
                  descripcion: modulo?.descripcion,
                  estado: false,
                },
              },
            }
          );
    
          const data3 = await modul_model.updateMany(
            {},
            {
              $pull: {
                modulos: {
                  cod: modulo?.cod,
                  descripcion: modulo?.descripcion,
                  estado: true,
                },
              },
            }
          );

          const data = await modul_model.updateMany(
            {},
            {
              $push: {
                modulos: {
                  cod: modulo?.cod,
                  descripcion: modulo?.descripcion,
                  estado: req.body.estado,
                },
              },
            }
          );

    }

    edit_response("modulo", data, cod, res);
  } catch (error) {
    res.json({ msg: error });
  }
};

export const eliminar_modulo = async (req: Request, res: Response) => {
  try {
    const { cod } = req.params;
    const modulo = await modulos_schema.findOne({ cod: cod });

    const data = await modulos_schema.deleteOne({ cod: cod });

    if (data.deletedCount > 0) {
      console.log(cod);
      console.log(modulo);
      const data2 = await modul_model.updateMany(
        {},
        {
          $pull: {
            modulos: {
              cod: modulo?.cod,
              descripcion: modulo?.descripcion,
              estado: false,
            },
          },
        }
      );

      const data3 = await modul_model.updateMany(
        {},
        {
          $pull: {
            modulos: {
              cod: modulo?.cod,
              descripcion: modulo?.descripcion,
              estado: true,
            },
          },
        }
      );

      console.log(data2);
    }

    delete_response("modulo", data, cod, res);
  } catch (error) {
    res.json({ msg: error });
  }
};

export const obtener_modulos = async (req: Request, res: Response) => {
  try {
    const data = await modulos_schema.find();

    get_all_response(data, res);
  } catch (error) {}
};
