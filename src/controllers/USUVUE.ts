import { Request, Response } from "express";
import { get_response, get_all_response, omitirId, generarJwt } from "../global/global";
import { usuvue_model } from "../models/USUVUE";

export const getusuvue = async (req: Request, res: Response) => {
  try {
    const { llaveResp, clave } = req.params;
    console.log(llaveResp, clave);
    const data = await usuvue_model.aggregate([
      {
        $lookup: {
          from: "restr",
          let: { llave: "$llaveOper"},
          pipeline: [
            {
              $match: {
                $expr: { $eq: ["$llaveRest.oper", "$$llave"] },
              },
            },{
              $project:{
                _id:0,
                opc: {$concat:[{$replaceAll: { input: "$llaveRest.opc", find: " ", replacement: ""}}]},
              }
            },
          ],
          as: "restr",
        },
      },
      {
        $match:{
          llaveOper: llaveResp
        }
      },
     ])
    if (data[0]) {
      if (data[0].clave == atob(clave)) {
          const token = await generarJwt(data[0].llaveOper)
        if(atob(clave) === "NUEVO123"){
            delete data[0].clave
            res.json({data:data[0], token, changePassword:true})
        }else res.json({data, token})
      } else res.json({ msg: "USER" });
    } else {
      get_response("usuvue", data, "", res);
    }
  } catch (error) {
    console.log(error)
    res.json({ msg: error });
  }
};

export const f8Usuvue = async (req: Request, res: Response) => {
  try {
    const { desde, cantidad } = req.params;
    let { dato } = req.query;
    const data = await usuvue_model
    .find ({ $or: [
      { llaveOper: { $regex: dato,  $options: "ix"} },
      {nombre: { $regex: dato, $options: "i"} }
    ]}, omitirId)
    .skip(Number(desde))
    .limit(Number(cantidad));
    get_all_response(data, res);
  } catch (error) {
    res.json({ msg:error });
  }
}