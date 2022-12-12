import { Request, Response } from "express";
import { get_all_response } from "../global/global";
import { corres_model } from "../models/CORRES";
//Corres

export const getCorr891F8 = async (req: Request, res: Response) => {
  try {
    const {desde,cantidad} = req.params;
    const {dato} = req.query;
    const data = await corres_model
    .aggregate([])
    .project({
        _id:0,
        llave:{
            $concat: [
              { $toString: ["$llave.anoLlave"] },
              { $toString: ["$llave.cont"] },
            ],
          },
        anoLlave:{ $toString: ["$llave.anoLlave"] },
        contLlave:{ $toString: ["$llave.cont"] },
        // cartera:,
    })
    .match({
        $or: [
          { llave: { $regex: dato, $options: "i" } },
        ]
    })
    .skip(Number(desde))
    .limit(Number(cantidad));

    get_all_response(data, res)
  } catch (error) {
    console.log(error);
    res.json({ msg: error });
  }
};
