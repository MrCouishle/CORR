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

export const getImpresionCorr = async (req: Request, res: Response) => {
  try {
    const {nit, dep, tipoCorres} = req.body
    let body = {}
    if(nit != 99) body = {nit:Number(nit)}
    if(dep != "***") body = {dep:Number(dep)}
    if(tipoCorres != "**") body = {tipoCorres:(tipoCorres)}
    // if() body = {:()}
    console.log("Este es el body de COR301",body)
    const data = await corres_model.aggregate([
      {
        $lookup: {
          from: "terce",
          localField: "nit",
          foreignField: "codigo",
          as: "ter",
        },
      },

      {
        $unwind: "$ter",
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
        $unwind: "$aux",
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
        $unwind: "$serc",
      },

      {
        $lookup: {
          from: "tipco",
          localField: "tipoCorres",
          foreignField: "codigo",
          as: "tipc",
        },
      },

      {
        $unwind: "$tipc",
      },

      { $addFields: { dep: { $toInt: "$dep" } } },
      {
        $lookup: {
          from: "depco",
          localField: "dep",
          foreignField: "codigo",
          as: "depc",
        },
      },

      {
        $unwind: "$depc",
      },

      // { $lookup: {
      //     from: "rescorr",
      //     let: {},
      //     pipeline: [
      //       { $match:{
      //             $expr:{$eq:[ {$concat: ["$anoRes", "$contResPon" ]}, "$$codResp"]}
      //         }
      //       }
      //     ],
      //     as: "resco"
      //   }
      // },

      {
        $project: {
          _id: 0,
          llave:1,
          descripCont: { $concat: ["$ter.descripCont"] },
          anoLlave: { $concat: [{ $toString: ["$llave.anoLlave"] }] },
          fecha: 1,
          esta: 1,
          // hora:{$cocnat:['hora']},
          descrip: 1,
          nit: 1,
          dep: 1,//Dato informativo para el back
          descripTer: { $concat: ["$ter.descrip"] },
          dirTer: { $concat: ["$ter.direcc"] },
          emailTer: { $concat: ["$ter.email"] },
          telTer: { $concat: ["$ter.telefono"] },
          tipoCorres: 1,
          descripTipc: { $concat: ["$tipc.descripcion"] },
          diasTipc: { $concat: [{ $toString: ["$tipc.dias"] }] },
          // fecha_vence:{$concat:['$']},
          // dias_vence:{$concat:['$']}, Estas salen de operaciones
          descripAuxco: { $concat: ["$aux.descripcion"] },
          descripSerco: { $concat: ["$serc.descripcion"] },
          responsable: { $concat: ["$depc.responsable"] },
          correoResp: { $concat: ["$depc.correo"] },
          fol: 1,
          fold: 1,
          nroFact: 1,
          monto: 1,
          fechaFact: 1,
          fechaEntre: 1,
          oper: 1,
          manejo: 1,
          proceden: 1,
          // llaveResp:{$concat:['$resco.codResp']},
          // contResp:{$concat:['$resco.codResp.cont']},
          // f_respuesta:{$concat:['$resco.fecha']},
          // f_venres:{$concat:['$']}, Esto sale de una opracion
          cargo: { $concat: ["$depc.cargo"] },
          medioIng: 1,
        },
      },
    ])
    .match(body)

    get_all_response(data, res);
    console.log("En la validacion de COR301",data.length)
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
