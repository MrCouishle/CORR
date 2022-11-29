import { Request, Response } from "express";
import { get_response, get_all_response, omitirId, generarJwt } from "../global/global";
import { restr_model } from "../models/RESTR";

export const getRestr = async (req: Request, res: Response) => {
  try {
    const { llaveResp, clave } = req.params;
    console.log(llaveResp, clave);
    const data = await restr_model.findOne({ llaveRest: llaveResp });
    if (data?.llaveRest) {
      if (data.clave == atob(clave)) {
          const token = await generarJwt(data.llaveRest)
        if(atob(clave) === "NUEVO123"){
            res.json({data, token, changePassword:true})
        }else res.json({data, token})
      } else res.json({ msg: "USER" });
    } else {
      get_response("restr", data, "", res);
    }
  } catch (error) {
    res.json({ msg: error });
  }
};
