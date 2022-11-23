import { Request, Response } from "express";
import { get_all_response } from "../global/global";
import { terce_model } from "../models/TERCE";

export const getTerceroF8 = async (req:Request, res:Response)=>{
    try {
        const {desde, cantidad} = req.params
        const {dato} = req.query

        const data = await terce_model.aggregate([
            {
                
                $lookup:{
                    from:"ciudad",
                    let: { codCiu: "$codCiu" },
                    pipeline: [
                      { 
                        $match:{
                            $expr:{$eq:[ {$concat:["$codCiu.dpt", "$codCiu.ciu"]}, "$$codCiu" ]}
                        }
                      }
                    ],
                    as:"ciudad2"
                }
            },
            {
                
                $lookup:{
                    from:"activ",
                    let: { activ: "$act" },
                    pipeline: [
                      { 
                        $match:{
                            $expr:{$eq:[ {$toInt:"$codigo"}, "$$activ" ]}
                        }
                      }
                    ],
                    as:"actividad"
                }
            }
        ]).project({
            _id:0,
            codigo:{$toString:["$codigo"]},
            descrip:1,
            direcc:1,
            dv:1,
            emailTer2:1,
            telefono:1,
            ciudad:{ $concat: [{"$arrayElemAt": ["$ciudad2.nombre", 0]}] },
            factor:1,
            act:1,
            actividad:{$concat:[{$arrayElemAt:["$actividad.nombre",0]}]},
            entidad:1,
            //Buscar equivalentre a descripTer2
            embargos:1,
            exent:1,
        }).match({
            $or:[
                {codigo:{$regex:dato, $options:"i"}},
                {ciudad:{$regex:dato, $options:"i"}},
                {actividad:{$regex:dato, $options:"i"}},
                {descrip:{$regex:dato, $options:"i"}}
            ]
        })
        .skip(Number(desde))
        .limit(Number(cantidad))

        console.log(data.length)

        get_all_response(data, res)
    } catch (error) {
        console.log(error)
        res.json({msg:error})
    }
}