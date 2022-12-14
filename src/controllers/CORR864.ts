import { Request, Response } from "express";
import { get_all_response } from "../global/global";
import { rescorr_model } from "../models/RESCORR";
//Rescorr, Terce, Tipco

export const getRescorrF8 = async (req: Request, res: Response) => {
  try {
    const { desde, cantidad } = req.params;
    const { dato } = req.query;
    const data = await rescorr_model
      .aggregate([
        {
          $lookup: {
            from: "terce",
            localField: "nit",
            foreignField: "codigo",
            as: "ter",
          },
        },

        {
          $lookup: {
            from: "tipco",
            let: { tipoCorres: { $toString: "$tipoCorres" } },
            pipeline: [
              {
                $match: {
                  $expr: { $eq: ["$codigo", "$$tipoCorres"] },
                },
              },
            ],
            as: "tipco",
          },
        },
      ])
      
      .project({
        _id: 0,
        codResp: {
          $concat: [
            { $toString: ["$codResp.anoLlave"] },
            { $toString: ["$codResp.cont"] },
          ],
        },
        anoLlave: { $concat: [{ $toString: ["$codResp.anoLlave"] }] },
        contLlave: { $concat: [{ $toString: ["$codResp.cont"] }] },
        swRadi: 1,
        fecha: 1,
        hora: { $hour: "$fecha" },
        minutos:{$minutes:"$fecha"},
        firma: 1,
        codigoMacro: 1,
        asunto: 1,
        tabla: 1,
        respon: 1,
        cargo: 1,
        llaveRadi: { $concat: [{ $toString: ["$anoRadi"] }, "$contRadi"] },
        fechaRadi: 1,
        horaRadi: { $hour: "$fechaRadi" },
        nit: { $concat:[{$toString:["$nit"]}]},//Para filtrar se convierte a string para que el regex funciones
        tipoCorres: 1,
        descripTipco: { $concat: [{ $arrayElemAt: ["$tipco.descripcion", 0]}]},
        descrip: 1,
        descripTer:{ $concat: [{ $arrayElemAt: ["$ter.descrip", 0]}]},
        ser: 1,
        operdiri: 1,
        dep: 1,
        esta: 1,
        descripEsta: {
          $switch: {
            branches: [
              { case: { $eq: ["$esta", 1] }, then: "PENDIENTE LEER" },
              { case: { $eq: ["$esta", 2] }, then: "LEÍDA SIN RESPUESTA" },
              { case: { $eq: ["$esta", 3] }, then: "LEÍDA CON ÉXITO" },
              { case: { $eq: ["$esta", 4] }, then: "RESPUESTA CONFIRMADA" },
            ],
            default: "SIN DESCRIPCION DE ESTADO",
          },
        },
        codAuxco: 1,
        codUnifun: 1,
        proceden: 1,
        oper: 1,
        operModi: 1,
        fechaModi: 1,
        medio: 1,
        numeroFact: 1,
        nroGuia: 1,
        perRec: 1,
        monto: 1,
      })
      .match({
        $or:[
            {codResp:{$regex:dato, $options:"i"}},
            {nit:{$regex:dato}},
            {descripEsta:{$regex:dato, $options:"i"}},
            {descrip:{$regex:dato, $options:"i"}},
            {asunto:{$regex:dato, $options:"i"}},
        ]
      })
      .skip(Number(desde))
      .limit(Number(cantidad));

    get_all_response(data, res);
  } catch (error) {
    console.log(error);
    res.json({ msg: error });
  }
};