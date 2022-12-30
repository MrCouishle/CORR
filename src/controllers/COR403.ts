import { Request, Response } from "express";
import {
  get_response,
  get_all_response,
  edit_response,
  delete_response,
  omitirId,
} from "../global/global";
import { rescorr_model } from "../models/RESCORR";
import { pdf_res_model } from "../models/pdf-res";
import nodemailer from "nodemailer";

export const getRescorr = async (req: Request, res: Response) => {
  try {
    const data = await rescorr_model.find({}, omitirId);
    get_all_response(data, res);
  } catch (error) {
    console.log(error);
    res.json({ msg: error });
  }
};

export const postRescorr = async (req: Request, res: Response) => {
  try {
    new rescorr_model(req.body).save((err) => {
      if (err) res.json({ msg: err });
      else res.json({ N1: "guardado" });
    });
  } catch (error) {
    console.log(error);
    res.json({ msg: error });
  }
};

export const putRescorr = async (req: Request, res: Response) => {
  try {
    const codResp = req.body.codResp;
    delete req.body.codResp;
    const data = await rescorr_model.updateOne({ codResp: codResp }, req.body);
    edit_response(
      "rescorr",
      data,
      `${codResp.anoLlave} / ${codResp.cont}`,
      res
    );
  } catch (error) {
    console.log(error);
    res.json({ msg: error });
  }
};

export const deleteRescorr = async (req: Request, res: Response) => {
  try {
    const codResp = {
      anoLlave: Number(req.params.anoLlave),
      cont: Number(req.params.cont),
    };
    const data = await rescorr_model.deleteOne({ codResp });
    delete_response(
      "rescorres",
      data,
      `${codResp.anoLlave} / ${codResp.cont}`,
      res
    );
  } catch (error) {
    console.log(error);
    res.json({ msg: error });
  }
};

export const f8Rescorr = async (req: Request, res: Response) => {
  try {
    const { desde, cantidad } = req.params;
    const { dato } = req.query;

    const data = await rescorr_model
      .aggregate()
      .project({
        _id: 0,
        codResp: {
          $concat: [
            { $toString: ["$codResp.anoLlave"] },
            { $toString: ["$codResp.cont"] },
          ],
        },
        swRadi: 1,
        fecha: 1,
        fechaR: { $substr: ["$fecha", 0, 10] },
        horaFecha: {
          $concat: [
            { $toString: { $hour: "$fecha" } },
            ":",
            { $toString: { $minute: "$fecha" } },
          ],
        },
        firma: 1,
        llaveMacro: {
          $concat: [
            { $toString: ["$codigoMacro"] },
            { $toString: ["$clMacro"] },
          ],
        },
        asunto: 1,
        tabla: 1,
        respon: 1,
        cargo: 1,
        llaveRadi: {
          $concat: [{ $toString: ["$anoRadi"] }, { $toString: ["$contRadi"] }],
        },
        fechaRadi: 1,
        horaRadi: {
          $concat: [
            { $toString: { $hour: "$fechaRadi" } },
            ":",
            { $toString: { $minute: "$fechaRadi" } },
          ],
        },
        nit: { $concat: [{ $toString: ["$nit"] }] },
        tipoCorres: 1,
        descrip: 1,
        ser: 1,
        operdiri: 1,
        dep: 1,
        esta: { $concat: [{ $toString: ["$esta"] }] },
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
        codAuxco: 1,
        codUnifun: 1,
        proceden: 1,
        oper: 1,
        operModi: 1,
        medio: 1,
        numeroFact: 1,
        monto: 1,
        nroGuia: 1,
        perRec: 1, //Esto en el codigo cobol es "presente"
      })
      .match({
        $or: [
          { nit: { $regex: dato, $options: "i" } },
          { codResp: { $regex: dato, $options: "i" } },
          { oper: { $regex: dato, $options: "i" } },
          { respon: { $regex: dato, $options: "i" } },
          { esta: { $regex: dato, $options: "i" } },
        ],
      })
      .skip(Number(desde))
      .limit(Number(cantidad));
    get_all_response(data, res);
  } catch (error) {
    console.log(error);
    res.json({ msg: error });
  }
};

export const ultResCorr = async (req: Request, res: Response) => {
  try {
    const data = await rescorr_model
      .findOne(
        {},
        {
          _id: 0,
          codResp: 1,
          codRespR: {
            $concat: [
              { $toString: "$codResp.anoLlave" },
              { $toString: "$codResp.cont" },
            ],
          },
          cont: { $concat: [{ $toString: "$codResp.cont" }] },
          fecha: 1,
          fechaR: { $substr: ["$fecha", 0, 10] },
          hora: {
            $concat: [
              { $toString: { $hour: "$fecha" } },
              ":",
              { $toString: { $minute: "$fecha" } },
            ],
          },
        }
      )

      .sort({ _id: -1 });
    get_response("rescorr", data, "", res);
  } catch (error) {
    console.error(error);
    res.json({ msg: error });
  }
};

export const getRescorrLlave = async (req: Request, res: Response) => {
  try {
    const { anoLlave, cont } = req.params;
    console.log(req.params);
    const codResp = {
      anoLlave: Number(anoLlave),
      cont: Number(cont),
    };
    console.log(codResp);
    const data = await rescorr_model
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
            as: "tipco",
          },
        },
      ])
      .project({
        _id: 0,
        codResp2: {
          $concat: [
            { $toString: ["$codResp.anoLlave"] },
            { $toString: ["$codResp.cont"] },
          ],
        },
        codResp: 1,
        anoLlave: { $concat: [{ $toString: ["$codResp.anoLlave"] }] },
        contLlave: { $concat: [{ $toString: ["$codResp.cont"] }] },
        swRadi: 1,
        // fecha:1,
        fecha: { $substr: ["$fecha", 0, 10] },
        hora: {
          $concat: [
            { $toString: { $hour: "$fecha" } },
            ":",
            { $toString: { $minute: "$fecha" } },
          ],
        },
        firma: 1,
        codigoMacro: 1,
        asunto: 1,
        tabla: 1,
        respon: 1,
        cargo: 1,
        llaveRadi: { $concat: [{ $toString: ["$anoRadi"] }, "$contRadi"] },
        // fechaRadi:1,
        fechaRadi: { $substr: ["$fechaRadi", 0, 10] },
        horaRadi: {
          $concat: [
            { $toString: { $hour: "$fechaRadi" } },
            ":",
            { $toString: { $minute: "$fechaRadi" } },
          ],
        },
        nit: { $concat: [{ $toString: ["$nit"] }] }, //Para filtrar se convierte a string para que el regex funciones
        tipoCorres: 1,
        descripTipco: {
          $concat: [{ $arrayElemAt: ["$tipco.descripcion", 0] }],
        },
        descrip: 1,
        descripTer: { $concat: [{ $arrayElemAt: ["$ter.descrip", 0] }] },
        ser: 1,
        operdiri: 1,
        dep: 1,
        esta: 1,
        descripEsta: {
          $switch: {
            branches: [
              { case: { $eq: ["$esta", 1] }, then: "PENDIENTE LEER" },
              { case: { $eq: ["$esta", 2] }, then: "LEÍDA SIN RESPUESTA" },
              { case: { $eq: ["$esta", 3] }, then: "LEÍDA CON ÉXITO" },
              { case: { $eq: ["$esta", 4] }, then: "RESPUESTA CONFIRMADA" },
            ],
            default: "SIN DESCRIPCION DE ESTADO",
          },
        },
        codAuxco: 1,
        codUnifun: 1,
        proceden: 1,
        oper: 1,
        operModi: 1,
        fechaModi: 1,
        horaModi: {
          $concat: [
            { $toString: { $hour: "$fechaModi" } },
            ":",
            { $toString: { $minute: "$fechaModi" } },
          ],
        },
        medio: 1,
        numeroFact: 1,
        nroGuia: 1,
        perRec: 1,
        monto: 1,
      })
      .match({ codResp: codResp });
    get_response("rescorr", data[0], codResp, res);
  } catch (error) {
    console.error(error);
    res.json({ msg: error });
  }
};

export const envioCorreos = async (req: Request, res: Response) => {
  try {
    const {
      server_email,
      remitente,
      clave,
      puerto,
      id,
      propietario,
      anoLlave,
      cont,
      destino,
      nom_empresa,
    } = req.body;

    const llave = {
      anoLlave: parseInt(anoLlave),
      cont: parseInt(cont),
    };
    const datos = await pdf_res_model.findOne({ llave: llave });
    if (datos) {
      let base64 = "";
      if (datos?.archivo) base64 = datos?.archivo.toString();

      const config = {
        host: server_email,
        port: parseInt(puerto),
        auth: {
          user: remitente,
          pass: clave,
        },
      };

      const msg = {
        from: remitente,
        to: destino,
        subject: nom_empresa,
        text: "La presente, adjunto archivos de correspondencia aun pendientes por revisar.",
        attachments: [
          {
            filename: `${llave.anoLlave}${llave.cont}.pdf`,
            content: base64,
            encoding: "base64",
          },
        ],
      };

      const trasnport = nodemailer.createTransport(config);

      const info = await trasnport.sendMail(msg);

      res.json(info);
    } else {
      res.json({ msg: `El pdf solicitado no existe`, cod_error: "01" });
    }
  } catch (error) {
    console.error(error);
    res.json({ msg: error });
  }
};
