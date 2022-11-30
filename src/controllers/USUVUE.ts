import { Request, Response } from "express";
import { get_response, get_all_response, omitirId, generarJwt } from "../global/global";
import { usuvue_model } from "../models/USUVUE";

export const getusuvue = async (req: Request, res: Response) => {
  try {
    const { llaveResp, clave } = req.params;
    console.log(llaveResp, clave);
    const data2 = await usuvue_model.findOne({ llaveOper: llaveResp });
    if (data2?.llaveOper) {
      if (data2.clave == atob(clave)) {
          const token = await generarJwt(data2.llaveOper)
        if(atob(clave) === "NUEVO123"){
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
             ]).project({
              clave:0
             })
            res.json({data:data[0], token, changePassword:true})
        }else res.json({data2, token})
      } else res.json({ msg: "USER" });
    } else {
      get_response("usuvue", data2, "", res);
    }
  } catch (error) {
    console.log(error)
    res.json({ msg: error });
  }
};
