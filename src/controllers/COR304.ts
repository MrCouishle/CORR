import { Request, Response } from "express";
import { get_all_response } from "../global/global";
import { rescorr_model } from "../models/RESCORR";

// (Corres), (serco), (rescro principal), depco, (auxtip), (terce), (tipco)

export const listadoControlRespuestas = async (req: Request, res: Response) => {
  try {
    const { nit, dep, tipo_corres, jor, proceden, manejo, fechaIni, fechaFin } =
      req.body;

    let nitB = {};
    let depB = {};
    let tipo_corresB = {};
    let jorB = {};
    let procedenB = {};
    let manejoB = {};

    if (nit != "**") nitB = { nit: Number(nit) };
    if (dep != "**") depB = { dep: dep };
    if (tipo_corres != "**") tipo_corresB = { tipoCorres: Number(tipo_corres) };
    if (jor != "**") {
      if (jor == "M") jorB = { hour: { $lte: 11 } };
      else jorB = { hour: { $gte: 12 } };
    }
    if (proceden != "**") procedenB = { proceden: Number(proceden) };
    if (manejo != "**") manejoB = { manejo: Number(manejo) };

    const data = await rescorr_model
      .aggregate([
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
        {
          $lookup: {
            from: "auxtip",
            localField: "codAuxco",
            foreignField: "codigo",
            as: "auxco",
          },
        },
        {
          $lookup: {
            from: "serco",
            localField: "ser",
            foreignField: "codigo",
            as: "serco",
          },
        },
        {
          $lookup: {
            from: "terce",
            localField: "nit",
            foreignField: "codigo",
            as: "terce",
          },
        },
        {
          $lookup: {
            from: "corres",
            localField: "codResp",
            foreignField: "llave",
            as: "corres",
          },
        },
        {
          $lookup: {
            from: "depco",
            let: { codDep: { $toInt: "$dep" } },
            pipeline: [
              {
                $match: {
                  $expr: { $eq: ["$codigo", "$$codDep"] },
                },
              },
            ],
            as: "depco",
          },
        },
      ])
      .project({
        _id: 0,
        contResPon: 1,
        fecha: 1,
        descrip: 1,
        nit: 1,
        dep: 1,
        descripTer: { $concat: [{ $arrayElemAt: ["$terce.descrip", 0] }] },
        tipoCorres: 1,
        descripTipco: {
          $concat: [{ $arrayElemAt: ["$tipco.descripcion", 0] }],
        },
        descripAuxco: {
          $concat: [{ $arrayElemAt: ["$auxco.descripcion", 0] }],
        },
        descripSerco: {
          $concat: [{ $arrayElemAt: ["$serco.descripcion", 0] }],
        },
        responsableDep: {
          $concat: [{ $arrayElemAt: ["$depco.responsable", 0] }],
        },
        codResp: 1,
        fechaPon: {
          $let: {
            vars: {},
            in: { $add: [{ $arrayElemAt: ["$corres.fecha", 0] }] },
          },
        },
        fol: { $concat: [{ $arrayElemAt: ["$corres.fol", 0] }] },
        nroFact: { $concat: [{ $arrayElemAt: ["$corres.nroFact", 0] }] },
        monto: {
          $let: {
            vars: {},
            in: { $add: [{ $arrayElemAt: ["$corres.monto", 0] }] },
          },
        },
        fechaFact: {
          $let: {
            vars: {},
            in: { $add: [{ $arrayElemAt: ["$corres.fechaFact", 0] }] },
          },
        },
        proceden: {
          $let: {
            vars: {},
            in: { $add: [{ $arrayElemAt: ["$corres.proceden", 0] }] },
          },
        },
        hour: { $hour: "$fecha" },
        manejo: {
          $let: {
            vars: {},
            in: { $add: [{ $arrayElemAt: ["$corres.manejo", 0] }] },
          },
        },
      })
      .match({
        $and: [
          nitB,
          depB,
          tipo_corresB,
          jorB,
          procedenB,
          manejoB,
          { fecha: { $gte: new Date (fechaIni) } },
          { fecha: { $lte: new Date (fechaFin) } },
        ],
      });
    get_all_response(data, res);
  } catch (error) {
    console.log(error);
    res.json({ msg: error });
  }
};
