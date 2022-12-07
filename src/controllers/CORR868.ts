import { Request, Response } from "express";
import { get_all_response } from "../global/global";
import { corres_model } from "../models/CORRES";
//Corres, terce, tipco

export const getCorresF8 = async (req: Request, res: Response) => {
  try {
    const { desde, cantidad } = req.params;
    const { dato } = req.query;
    const data = await corres_model
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
            as: "tipc",
          },
        },
      ])
      .project({
        _id: 0,
        llave: {
          $concat: [
            { $toString: ["$llave.anoLlave"] },
            { $toString: ["$llave.cont"] },
          ],
        },
        anoLlave: { $toString: ["$llave.anoLlave"] },
        contLlave: { $toString: ["$llave.cont"] },
        fecha: 1,
        hora: { $hour: "$fecha" },
        minutos: { $minute: "$fecha" },
        nit: { $toString: ["$nit"] },
        tipoCorr: 1,
        descripTipco: {
          $concat: [{ $arrayElemAt: ["$tipc.descripcion", 0] }],
        },
        descrip: 1,
        descripTer: { $concat: [{ $arrayElemAt: ["$ter.descrip", 0] }] },
        ser: 1,
        operdiri: 1,
        dep: 1,
        fol: 1,
        fold: 1,
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
        anex: 1,
        tipoAnexo: 1,
        otroAnexo: 1,
        nroFact: 1,
        monto: 1,
        fechaFact: 1,
        fechaEntre: 1,
        nroGuia: 1,
        persentre: 1,
        observ: 1,
        tablaDep: 1,
        codAux: 1,
        tablaOper: 1,
        llaveResp: 1,
        errorRips: 1,
        nroEnvio: 1,
        proceden: 1,
        deptoremi: 1,
        manejo: 1,
        holding: 1,
        centroCos: 1,
        ciudad: 1,
        cargoOps: 1,
        llaveCausa: { $concat: ["$loteCau", "$comprobCau"] },
        fechaCau: 1,
        llavePago: { $concat: ["$lotePag", "$comprobPag"] },
        fechaPag: 1,
        oper: 1,
        operModi: 1,
        fechaModi: 1,
        diasTipco: 1,
        medioIng: 1,
        contAtnt1: 1,
        contAtnt2: 1,
        contAtnt3: 1,
      })
      .match({
        $or:[
          {nit:{$regex:dato, $options:"i"}},
          {descripEsta:{$regex:dato, $options:"i"}},
          {descripTipco:{$regex:dato, $options:"i"}},
          {llave:{$regex:dato, $options:"i"}},
          {oper:{$regex:dato, $options:"i"}}
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
