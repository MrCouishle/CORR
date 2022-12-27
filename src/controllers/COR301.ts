import { Request, Response } from "express";
import { RestTypeNode } from "typescript";
import {
  concatenarCodigos,
  delete_response,
  edit_response,
  fechaVence,
  get_all_response,
  get_response,
  omitirId,
} from "../global/global";
import { corres_model } from "../models/CORRES";
import { dia_no_habil_model } from "../models/DNHABIL";

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
      estado,
    } = req.body;

    let nitt = {};
    let depp = {};
    let tipoCorrr = {};
    let jornadaa = {};
    let procedenn = {};
    let manejoo = {};
    let estadoo = {};

    //   const festivos = [[10],[],[21],[14,15],[30],[20,27],[4,20],[15],[],[17],[7,14],[8]]; //CUANDO SE LLEGUE AL 2023 QUITAR ESTA LINEA
    //   // const festivos = [[9],[],[20],[6,7],[1,22],[12,19],[3,20],[7,21],[],[16],[6,13],[8,25]]; ESTE ARRAY ES PARA EL 2023
    //   function calculoEntrega (festivos, diaIni, diasEntrega ){
    //     let diaPropuesto = new Date (diaIni.getFullYear(), diaIni.getMonth(), diaIni.getDate());
    //     let i = 1;

    //     while (diasEntrega > 0) {
    //       let festivo = false;
    //       diaPropuesto = new Date (diaIni.getFullYear(), diaIni.getMonth(), diaIni.getDate() + 1);
    //       if (diaPropuesto.getDay() > 0 && diaPropuesto.getDay() < 6){
    //       let m = diaPropuesto.getMonth();
    //       let dia = diaPropuesto.getDate();

    //       for (let d in festivos[m]){
    //         if (dia === festivos[m][d]){
    //           festivo = true;
    //           break;
    //         }
    //       }
    //       if(!festivo){
    //         diasEntrega--;
    //       }
    //     }
    //     i++
    //   }
    //   return diaPropuesto;

    //   const diasFinal = calculoEntrega(diaIni,10,festivos);
    //   console.log(`Dia inicial: ${diaIni.toString()}`);
    //   console.log(`Dia final: ${diasFinal.toString()}`);
    // }
    if (nit != "99") nitt = { nit: Number(nit) };
    if (dep != "**") depp = { dep: dep };
    if (tipoCorr != "**") tipoCorrr = { tipoCorres: tipoCorr };
    if (jornada != "**") {
      if (jornada == "M")
        jornadaa = {
          hour: { $lt: 12 },
        };
      //$lt para que tome valores de 12 hacia atras, si le pongo la e tomaria el 12
      else jornadaa = { hour: { $gte: 12 } };
    }
    if (proceden != "**") procedenn = { proceden: Number(proceden) };
    if (manejo != "**") manejoo = { manejo: Number(manejo) };
    if (estado != "**" && estado != null) {
      estadoo = { estado: Number(estado) };
    }

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
            let: { codigo: "$dep" },
            pipeline: [
              {
                $match: {
                  $expr: { $eq: ["$codigo", "$$codigo"] },
                },
              },
            ],
            as: "depc",
          },
        },
      ])

      .project({
        _id: 0,
        cont: { $concat: [{ $toString: ["$llave.cont"] }, " -E"] },
        anoLlave: { $concat: [{ $toString: ["$llave.anoLlave"] }] },
        fecha: 1,
        fechaR: { $substr: ["$fecha", 0, 10] },
        hora: {
          $concat: [
            { $toString: { $hour: "$fecha" } },
            ":",
            { $toString: { $minute: "$fecha" } },
          ],
        },
        esta: 1,
        dep: 1,
        estaR: {
          $switch: {
            branches: [
              { case: { $eq: ["$esta", 1] }, then: "EN TRAMITE" },
              { case: { $eq: ["$esta", 2] }, then: "VENCIDA" },
              { case: { $eq: ["$esta", 3] }, then: "RESUELTA" },
              { case: { $eq: ["$esta", 4] }, then: "RESUELTA" }, //Se consulto con encargado de correspondencia daniel, el numero 4 es resuelta tambien, igual que el 6 lo toman como resuelta.
              { case: { $eq: ["$esta", 5] }, then: "PRORROGA" },
              { case: { $eq: ["$esta", 6] }, then: "ANULADO" },
            ],
            default: "SIN DEFINIR",
          },
        },
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
        fechaVence: {
          $dateAdd: {
            startDate: "$fecha",
            unit: "day",
            amount: { $arrayElemAt: ["$tipc.dias", 0] },
          },
        },
        fechaVenceR: {
          $substr: [
            {
              $dateAdd: {
                startDate: "$fecha",
                unit: "day",
                amount: { $arrayElemAt: ["$tipc.dias", 0] },
              },
            },
            0,
            10,
          ],
        },
        diasVence: {
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
        fecheFactR: { $substr: ["$fechaFact", 0, 10] },
        horaFechaFact: {
          $concat: [
            { $toString: { $hour: "$fechaFact" } },
            ":",
            { $toString: { $minute: "$fechaFact" } },
          ],
        },
        fecheEntreR: { $substr: ["$fechaEntre", 0, 10] },
        horaFechaEntre: {
          $concat: [
            { $toString: { $hour: "$fechaEntre" } },
            ":",
            { $toString: { $minute: "$fechaEntre" } },
          ],
        },
        oper: 1,
        manejo: 1,
        manejoR: {
          $switch: {
            branches: [
              { case: { $eq: ["$manejo", 1] }, then: "INFORMATIVO" },
              { case: { $eq: ["$manejo", 2] }, then: "RESOLUTIVO" },
            ],
            default: "SIN DEFINIR",
          },
        },
        proceden: 1,
        procedenR: {
          $switch: {
            branches: [
              { case: { $eq: ["$proceden", 1] }, then: "EXTERNO" },
              { case: { $eq: ["$proceden", 2] }, then: "INTERNO" },
            ],
            default: "SIN DEFINIR",
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
          $substr:[
          {$let: {
            vars: {},
            in: { $add: [{ $arrayElemAt: ["$rescorr.fecha", 0] }] },
          }},0,10
          ],
      },
        // horaFechaRes: { $concat: [{ $toString: {$hour: "$rescorr.fecha"}}, ":", { $toString: {$minute:"$rescorr.fecha"}}]},
        // fehcaVenRes:{

        // },
        cargo: { $concat: [{ $arrayElemAt: ["$depc.cargo", 0] }] },
        medioIng: 1,
        medioIngR: {
          $switch: {
            branches: [
              { case: { $eq: ["$medioIng", 1] }, then: "CORREO CERTIFICADO" },
              { case: { $eq: ["$medioIng", 2] }, then: "E-MAIL" },
              { case: { $eq: ["$medioIng", 3] }, then: "PERSONAL" },
              { case: { $eq: ["$medioIng", 4] }, then: "PERSONAL ESCRITA" }, //Se consulto con encargado de correspondencia daniel, el numero 4 es resuelta tambien, igual que el 6 lo toman como resuelta.
              { case: { $eq: ["$medioIng", 5] }, then: "PERSONAL VERBAL" },
              { case: { $eq: ["$medioIng", 6] }, then: "PÁGINA WEB" },
            ],
            default: "SIN DEFINIR",
          },
        },
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
          estadoo,
        ],
      });


      for (let i = 0; i < data.length; i++) {
        if(typeof data[i].diasTipc == "object") console.log(data[i].diasTipc)
        data[i].fechaVence = await fechaVence(data[i].fecha, data[i].diasTipc)
        
      }

    get_all_response(data, res);
    // console.log("RES en la validacion de COR301", res);
    console.log("LENGTH en la validacion de COR301", data.length);
    // console.log("DATA en la validacion de COR301", data);
  } catch (error) {
    console.log(error);
    res.json({ msg: error });
  }
};
