import { Request, Response } from "express";
import {
  concatenarCodigos,
  delete_response,
  edit_response,
  get_all_response,
  get_response,
  omitirId,
} from "../global/global";
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

export const putCorres = async (req: Request, res: Response) => {
  try {
    const llave = req.body.llave;
    delete req.body.llave;
    const data = await corres_model.updateOne({ llave: llave }, req.body);
    edit_response("corres", data, `${llave.anoLlave} / ${llave.cont}`, res);
  } catch (error) {
    console.log(error);
    res.json({ msg: error });
  }
};

export const getCorres = async (req: Request, res: Response) => {
  try {
    const llave = {
      anoLlave: Number(req.params.anoLlave),
      cont: Number(req.params.cont),
    };
    const data = await corres_model.findOne({ llave }, omitirId);
    get_response("corres", data, `${llave.anoLlave} / ${llave.cont}`, res);
  } catch (error) {
    res.json({ msg: error });
  }
};

export const deleteCorres = async (req: Request, res: Response) => {
  try {
    const llave = {
      anoLlave: Number(req.params.anoLlave),
      cont: Number(req.params.cont),
    };
    const data = await corres_model.deleteOne({ llave });
    delete_response("corres", data, `${llave.anoLlave} / ${llave.cont}`, res);
  } catch (error) {
    res.json({ msg: error });
  }
};

export const getCorresF8 = async (req: Request, res: Response) => {
  try {
    const { desde, cantidad } = req.params;
    const { dato } = req.query;
    console.log(dato)
    //const data2 = await corres_model.find()
    const data = await corres_model
      .aggregate([
        {
          $lookup: {
            from: "tipco",
            localField: "tipoCorres",
            foreignField: "codigo",
            as: "tipco",
          },
        },
        // {
        //   $unwind: "$tipco[0]",
        // },
        {
          $lookup: {
            from: "terce",
            localField: "nit",
            foreignField: "codigo",
            as: "terce",
          },
        },
        // {
        //   $unwind: "$terce[0]",
        // },
      ])
      .project({
        _id: 0,
        llave: {
          $concat: [
            { $toString: ["$llave.anoLlave"] },
            { $toString: ["$llave.cont"] },
          ],
        },
        fecha: 1,
        nit: {$concat:[
          {$toString:["$nit"]}
        ]},
        tipoCorres: 1,
        descrip_tipco: { $concat: [{"$arrayElemAt": ["$tipco.descripcion", 0]}] },
        descrip: 1,
        descrip_ter: { $concat: [{"$arrayElemAt": ["$terce.descrip", 0]}] },
        ser: 1,
        operdiri: 1,
        dep: 1,
        fol: 1,
        fold: 1,
        esta: 1, //se debe condicionar
        descrip_esta: {
          $concat:[
           { $cond: {
              if: { $eq: ["$esta", 1] },
              then: "PTE LEER",
              else: "",
            }},
            { $cond: {
              if: { $eq: ["$esta", 2] },
              then: "LEIDA SIN RTA",
              else: "",
            }},
            { $cond: {
              if: { $eq: ["$esta", 3] },
              then: "LEIDA EXITOSA",
              else: "",
            }},
            { $cond: {
              if: { $eq: ["$esta", 4] },
              then: "RTA CONFIRMADO",
              else: "",
            }}
          ]
        },
        anex: 1,
        tipoAnexo: 1,
        otroAnexo: 1,
        fechaEntre: 1,
        nroGuia: 1,
        codAux: 1,
        contResPon: 1,
        nroEnvio: 1,
        proceden: 1,
        deptoremi: 1,
        manejo: 1,
        holding: 1,
        centroCos: 1,
        ciudad: 1,
        cargoOps: 1,
        diasTipco: 1,
        medioIng: 1,
        fechaModi: 1,
        contAtnt1: 1,
        contAtnt2: 1,
        contAtnt3: 1,
      })
      .match({
        $or:[
          { nit: { $regex: dato, $options: "i" } },
          { descrip: { $regex: dato, $options: "i" } },
          { descrip_esta: { $regex: dato, $options: "i" } },
          { descrip_ter: { $regex: dato, $options: "i" } },
          { descrip_tico: { $regex: dato, $options: "i" } },
          { llave: { $regex: dato, $options: "i" } },
        ]
      })
      .skip(Number(desde)).
      limit(Number(cantidad));
      console.log(data.length)
    get_all_response(data, res);
  } catch (error) {
    console.log(error);
    res.json({ msg: error });
  }
};
