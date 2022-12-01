import { Request, Response } from "express";
import { RestTypeNode } from "typescript";
import {
  concatenarCodigos,
  delete_response,
  edit_response,
  get_all_response,
  get_response,
  omitirId,
} from "../global/global";
import { corres_model } from "../models/CORRES";
// Pruebita
export const getImpresionCorr = async (req: Request, res: Response) => {
  try {
    const {
      nit,
      dep,
      tipoCorr,
      fechaIni,
      fechaFin,
      jornada,
      proceden,
      manejo,
      estado
    } = req.body;
    console.log("Este es el body de COR301", req.body);

    let nitt = {};
    let depp = {};
    let tipoCorrr = {};
    let jornadaa = {};
    let procedenn = {};
    let manejoo = {};
    let estadoo = {};

    if (nit != "99") nitt = { nit: Number(nit) };
    if (dep != "**") depp = { dep: dep };
    if (tipoCorr != "**") tipoCorrr = { tipoCorres: tipoCorr };
    if (jornada != "**") {
      if (jornada == "M")
        jornadaa = {
          hour: { $lt: 12 },
        }; //$lt para que tome valores de 12 hacia atras, si le pongo la e tomaria el 12
      else jornadaa = { hour: { $gte: 12 } };
    }
    if (proceden != "**") procedenn = { proceden: Number(proceden) };
    if (manejo != "**") manejoo = { manejo: Number(manejo) };
    if (estado != "**") estadoo = { estado: Number(estado) };

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
            from: "auxtip",
            localField: "codAux",
            foreignField: "codigo",
            as: "aux",
          },
        },

        {
          $lookup: {
            from: "serco",
            localField: "ser",
            foreignField: "codigo",
            as: "serc",
          },
        },

        {
          $lookup: {
            from: "rescorr",
            localField: "llave",
            foreignField: "codResp",
            as: "rescorr",
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
        cont: { $concat: [{ $toString: ["$llave.cont"] }] },
        anoLlave: { $concat: [{ $toString: ["$llave.anoLlave"] }] },
        fecha: 1,
        esta: 1,
        estaR:{
          $switch:{
            branches:[
              {case: {$eq: ["$esta", 1]}, then: "EN TRAMITE"},
              {case: {$eq: ["$esta", 2]}, then: "VENCIDA"},
              {case: {$eq: ["$esta", 3]}, then: "RESUELTA"},
              {case: {$eq: ["$esta", 4]}, then: "RESUELTA"},//Se consulto con encargado de correspondencia daniel, el numero 4 es resuelta tambien, igual que el 6 lo toman como resuelta.
              {case: {$eq: ["$esta", 5]}, then: "PRORROGA"},
              {case: {$eq: ["$esta", 6]}, then: "ANULADO"}
            ],
            default:"SIN DEFINIR"
          }
        },
        hour: { $hour: "$fecha" },
        minute: { $minute: "$fecha" },
        descrip: 1,
        nit: 1,
        descripTer: { $concat: [{ $arrayElemAt: ["$ter.descrip", 0] }] },
        dirTer: { $concat: [{ $arrayElemAt: ["$ter.direcc", 0] }] },
        emailTer: { $concat: [{ $arrayElemAt: ["$ter.email", 0] }] },
        telTer: { $concat: [{ $arrayElemAt: ["$ter.telefono", 0] }] },
        tipoCorres: 1,
        descripTipc: { $concat: [{ $arrayElemAt: ["$tipc.descripcion", 0] }] },
        diasTipc: {
          $let: {
            vars: {},
            in: { $add: [{ $arrayElemAt: ["$tipc.dias", 0] }] },
          },
        },
        fecha_vence: {
          $dateAdd: {
            startDate: "$fecha",
            unit: "day",
            amount: { $arrayElemAt: ["$tipc.dias", 0] },
          },
        },
        dias_vence: {
          $dateDiff: {
            startDate: new Date(),
            endDate: {
              $dateAdd: {
                startDate: "$fecha",
                unit: "day",
                amount: { $arrayElemAt: ["$tipc.dias", 0] },
              },
            },
            unit: "day",
          },
        },
        descripAuxco: { $concat: [{ $arrayElemAt: ["$aux.descripcion", 0] }] },
        descripSerco: { $concat: [{ $arrayElemAt: ["$serc.descripcion", 0] }] },
        responsableDep: {
          $concat: [{ $arrayElemAt: ["$depc.responsable", 0] }],
        },
        correoRespDep: { $concat: [{ $arrayElemAt: ["$depc.correo", 0] }] },
        fol: 1,
        fold: 1,
        nroFact: 1,
        monto: 1,
        fechaFact: 1,
        fechaEntre: 1,
        oper: 1,
        manejo: 1,
        manejoR: {
          $cond: {
            if: { $lt: ["$manejo", 2] },
            then: "INFORMATIVO",
            else: "RESOLUTIVO",
          },
          //   $switch:{
          //     branches:[
          //       {case:{"manejo":1}, then:"INFORMATIVO"},
          //       {case:{"manejo":2}, then:"RESOLUTIVO"}
          //     ],
          //     default:"Sin definir"
          // },
        },
        proceden: 1,
        procedenR: {
          $cond: {
            if: { $lt: ["$proceden", 2] },
            then: "EXTERNO",
            else: "INTERNO",
          },
        },
        llaveResp: {
          $let: {
            vars: {},
            in: { $add: [{ $arrayElemAt: ["$rescorr.codResp.anoLlave", 0] }] },
          },
        },
        contResp: {
          $let: {
            vars: {},
            in: { $add: [{ $arrayElemAt: ["$rescorr.codResp.cont", 0] }] },
          },
        },
        fechaRespuesta: {
          $let: {
            vars: {},
            in: { $add: [{ $arrayElemAt: ["$rescorr.fecha", 0] }] },
          },
        },
        // fehcaVenRes:{

        // },
        cargo: { $concat: [{ $arrayElemAt: ["$depc.cargo", 0] }] },
        medioIng: 1,
      })

      .match({
        $and: [
          nitt,
          depp,
          tipoCorrr,
          { fecha: { $gte: new Date(fechaIni) } },
          { fecha: { $lte: new Date(fechaFin) } },
          jornadaa,
          procedenn,
          manejoo,
          estadoo
        ],
      });
    get_all_response(data, res);
    // console.log("RES en la validacion de COR301", res);
    console.log("LENGTH en la validacion de COR301", data.length);
    // console.log("DATA en la validacion de COR301", data);
  } catch (error) {
    console.log(error);
    res.json({ msg: error });
  }
};

// export const postValidarDatos = async (req: Request, res: Response) => {
//   console.log(req.body);
//   let { nit, codigoDepco } = req.body;
//   let body: any;
//   if (nit == 99) body = {};
//   else body = { nit };
//   if(codigoDepco=="***") bodyDe = {}
//   const res_terce = await terce_model.find(body);
//   const res_depco = await depco_model.find(body);
//   res.json(res_terce);
// };
