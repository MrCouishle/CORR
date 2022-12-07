import { Request, Response } from "express";
import { get_all_response } from "../global/global";
import { corres_model } from "../models/CORRES";
//Corres, terce, tipco

export const getCorresF8 = async (req: Request, res: Response) => {
  try {
    const { desde, cantidad } = req.params;
    const { dato } = req.query;
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
      ])
      .project({
        _id:0,
        // llave:,
        // ano_llave:,
        // cont_llave:,
        // fecha:,
        // hora:,
        // nit:,
        // tipo_corr:,
        // descrip_tipco:,tipco
        // descripcion:,
        // descrip_ter:,tercero
        // cod_serco:,
        // operdiri:,
        // cod_depen:,
        // folio:,
        // folio_d:,
        // esta:,
        // descrip_esta:,
        // anexo:,
        // tip_anex:,
        // otr_anex:,
        // nro_fact:,
        // monto:,
        // fecha_fact:,
        // fecha_entr:,
        // nro_guia:,
        // presente:,
        // observacion:,
        // tabla_depen:,
        // cod_aux_cod:,
        // tabla_oper:,
        // tabla_oper:,
        // llave_resp:,
        // error_rips:,
        // nro_rips:,
        // nro_envio:,
        // procedencia:,
        // dpto_remi:,
        // manejo:,
        // holding:,
        // centro_costo:,
        // cod_ciudad:,
        // cargos_ops:,
        // llave_causa:,
        // fecha_causa:,
        // llave_pago:,
        // fecha_pago:,
        // oper_crea:,
        // oper_mod:,
        // fecha_mod:,
        // dias_max:,
        // med_ingreso:,
        // con_ant1:,
        // con_ant2:,
        // con_ant3:,
      })
      .match({})
      .skip(Number(desde))
      .limit(Number(cantidad));

    get_all_response(data, res);
  } catch (error) {
    console.log(error);
    res.json({ msg: error });
  }
};
