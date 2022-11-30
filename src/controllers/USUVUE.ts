import { Request, Response } from "express";
import {
  get_response,
  get_all_response,
  omitirId,
  generarJwt,
  edit_response,
} from "../global/global";
import { usuvue_model } from "../models/USUVUE";

export const getusuvue = async (req: Request, res: Response) => {
  try {
    const { llaveResp, clave } = req.params;
    console.log(llaveResp, clave);
    const data = await usuvue_model.aggregate([
      {
        $lookup: {
          from: "restr",
          let: { llave: "$llaveOper" },
          pipeline: [
            {
              $match: {
                $expr: { $eq: ["$llaveRest.oper", "$$llave"] },
              },
            },
            {
              $project: {
                _id: 0,
                opc: {
                  $concat: [
                    {
                      $replaceAll: {
                        input: "$llaveRest.opc",
                        find: " ",
                        replacement: "",
                      },
                    },
                  ],
                },
              },
            },
          ],
          as: "restr",
        },
      },
      {
        $match: {
          llaveOper: llaveResp,
        },
      },
    ]);
    if (data[0]) {
      if (data[0].clave == atob(clave)) {
        const token = await generarJwt(data[0].llaveOper);
        if (atob(clave) === "NUEVO123") {
          delete data[0].clave;
          res.json({ data: data[0], token, changePassword: true });
        } else res.json({ data, token });
      } else res.json({ msg: "USER" });
    } else {
      get_response("usuvue", data, "", res);
    }
  } catch (error) {
    console.log(error);
    res.json({ msg: error });
  }
};

export const cambiarContra = async (req: Request, res: Response) => {
  try {
    const { nueva_pass, pass, llave } = req.params;

    const user = await usuvue_model.findOne({
      $and: [{ llaveOper: llave }, { clave: pass }],
    });

    if (user) {
      const data = await usuvue_model.updateOne(
        { llaveRest: llave },
        { $set: { clave: nueva_pass } }
      );
      edit_response("usuvue", data, llave, res);
    } else {
    }
  } catch (error) {}
};

export const getUsuvueLlave = async (req: Request, res: Response) => {
  try {
    const { llaveOper } = req.params;

    const data = await usuvue_model.findOne({ llaveOper: llaveOper }, omitirId);

    get_response("usuvue", data, llaveOper, res);
  } catch (error) {
    res.json({ msg: error });
  }
};

export const f8Usuvue = async (req: Request, res: Response) => {
  try {
    const { desde, cantidad } = req.params;
    let { dato } = req.query;
    const data = await usuvue_model
      .find(
        {
          $or: [
            { llaveOper: { $regex: dato, $options: "ix" } },
            { nombre: { $regex: dato, $options: "i" } },
          ],
        },
        omitirId
      )
      .skip(Number(desde))
      .limit(Number(cantidad));
    get_all_response(data, res);
  } catch (error) {
    res.json({ msg: error });
  }
};
