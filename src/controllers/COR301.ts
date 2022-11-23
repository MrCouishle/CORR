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

export const getImpresionCorr = async (req: Request, res: Response) => {
    try {
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
        $unwind:"$ter",
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
        $unwind:"$aux",
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
        $unwind:"$serc",
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
        $unwind:"$tipc",
        },

        {
            $lookup: {
                from: "depco",
                localField: "dep",
                foreignField: "codigo",
                as: "dep",
            },
        },

        // {
        // $unwind:"$dep",
        // },

        {
            $project: {
                _id: 0,
                descripCont:{$concat:['$ter.descripCont']},
                anoLlave:{$concat:[{$toString:['$llave.anoLlave']}]},
                fecha:1,
                esta:1,
                // hora:{$cocnat:['hora']},
                descrip:1,
                nit:1,
                descripTer:{$concat:['$ter.descrip']},
                dirTer: {$concat:['$ter.direcc']},
                emailTer: {$concat:['$ter.email']},
                telTer: {$concat:['$ter.telefono']},
                tipoCorres: 1,
                tipc:1,
                descripTipc: {$concat:['$tipc.descripcion']},
                diasTipc: {$concat:[{$toString:['$tipc.dias']}]},
                // fecha_vence:{$concat:['$']},
                // dias_vence:{$concat:['$']},
                descripAuxco: {$concat:['$aux.descripcion']},
                descripSerco: {$concat:['$serc.descripcion']},
                // responsable:{$concat:['$depc.responsable']},
                // correoResp:{$concat:['$depc.correo']},
                fol:1,
                fold:1,
                nroFact:1,
                monto:1,
                fechaFact:1,
                fechaEntre:1,
                oper:1,
                manejo:1,
                proceden:1,
                // llave_resp:{$concat:['$Rescorr.llave_resp.']}, Esperar la respuesta de diego
                // cont_resp:{$concat:['$contResPon']}, Esperar la respuesta de diego
                // f_respuesta:{$concat:['$']},
                // f_venres:{$concat:['$']},
                // cargo:{$concat:['$depc.cargo']},
                medioIng:1,
            }

        }
    ])
    get_all_response(data, res)
    } catch (error){
        console.log(error)
        res.json ({msg:error})
    }

}