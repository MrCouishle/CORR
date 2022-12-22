import { Request, Response } from "express";
import nodemailer from "nodemailer";
import {
  concatenarCodigos,
  delete_response,
  edit_response,
  get_all_response,
  get_response,
  omitirId,
} from "../global/global";
import fs from "fs";
import { corres_model } from "../models/CORRES";
import { pdf_model } from "../models/PDF";
import { pdf_res_model } from "../models/pdf-res";

//corres, terce, tipco

export const postCorres = async (req: Request, res: Response) => {
  try {
    new corres_model(req.body).save((err) => {
      if (err) res.json({ msg: err });
      else res.json({ N1: "guardado" });
    });
  } catch (error) {
    res.json({ msg: error });
  }
};

export const putCorres = async (req: Request, res: Response) => {
  try {
    const llave = req.body.llave;
    delete req.body.llave;
    const data = await corres_model.updateOne({ llave: llave }, req.body);
    edit_response("corres", data, `${llave.anoLlave} / ${llave.cont}`, res);
  } catch (error) {
    console.log(error);
    res.json({ msg: error });
  }
};

export const getCorres = async (req: Request, res: Response) => {
  try {
    const { anoLlave, cont } = req.params;

    const llave = {
      anoLlave: Number(anoLlave),
      cont: Number(cont),
    };
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
        {
          $lookup: {
            from: "auxtip",
            let: { codAux: { $toString: "$codAux" } },
            pipeline: [
              {
                $match: {
                  $expr: { $eq: ["$codigo", "$$codAux"] },
                },
              },
            ],
            as: "auxtip",
          },
        },
        {
          $lookup: {
            from: "auxtip",
            localField: "codAux",
            foreignField: "codigo",
            as: "auxtip",
          },
        },
        {
          $lookup: {
            from: "serco",
            localField: "ser",
            foreignField: "codigo",
            as: "serco",
          },
        },
        {
          $lookup: {
            from: "depco",
            localField: "dep",
            foreignField: "codigo",
            as: "depco",
          },
        },
        {
          $lookup: {
            from: "remidep",
            localField: "deptoremi",
            foreignField: "codigo",
            as: "remidep",
          },
        },
      ])
      .project({
        _id: 0,
        llave: 1,
        anoLlave: { $toString: ["$llave.anoLlave"] },
        contLlave: { $toString: ["$llave.cont"] },
        fecha: { $substr: ["$fecha", 0, 10] },
        hora: {
          $concat: [
            { $toString: { $hour: "$fecha" } },
            ":",
            { $toString: { $minute: "$fecha" } },
          ],
        },
        minutos: { $minute: "$fecha" },
        nit: { $toString: ["$nit"] },
        tipoCorres: 1,
        descripTipco: {
          $concat: [{ $arrayElemAt: ["$tipc.descripcion", 0] }],
        },
        descrip: 1,
        descripTer: { $concat: [{ $arrayElemAt: ["$ter.descrip", 0] }] },
        ser: 1,
        operdiri: 1,
        dep: 1,
        fol: 1,
        fold: 1,
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
        responsableDep: {
          $concat: [{ $arrayElemAt: ["$depco.responsable", 0] }],
        },
        descripSer: {
          $concat: [{ $arrayElemAt: ["$serco.descripcion", 0] }],
        },
        descripAux: {
          $concat: [{ $arrayElemAt: ["$auxtip.descripcion", 0] }],
        },
        descripDeptoremi: {
          $concat: [{ $arrayElemAt: ["$remidep.descripcion", 0] }],
        },
        anex: 1,
        tipoAnexo: 1,
        otroAnexo: 1,
        nroFact: 1,
        monto: 1,
        fechaFact: { $substr: ["$fechaFact", 0, 10] },
        fechaEntre: { $substr: ["$fechaEntre", 0, 10] },
        nroGuia: 1,
        persentre: 1,
        observ: 1,
        tablaDep: 1,
        codAux: 1,
        tablaOper: 1,
        llaveResp: 1,
        errorRips: 1,
        nroEnvio: 1,
        proceden: 1,
        deptoremi: 1,
        manejo: 1,
        holding: 1,
        centroCos: 1,
        ciudad: 1,
        cargoOps: 1,
        llaveCausa: { $concat: ["$loteCau", "$comprobCau"] },
        fechaCau: { $substr: ["$fechaCau", 0, 10] },
        llavePago: { $concat: ["$lotePag", "$comprobPag"] },
        fechaPag: { $concat: ["$lotePag", "$comprobPag"] },
        oper: 1,
        operModi: 1,
        fechaModi: { $substr: ["$fechaModi", 0, 10] },
        diasTipco: 1,
        medioIng: 1,
        contAtnt1: 1,
        contAtnt2: 1,
        contAtnt3: 1,
      })
      .match({ llave: llave });

    get_response("res", data[0], llave, res);
  } catch (error) {
    console.log(error);
    res.json({ msg: error });
  }
};

export const deleteCorres = async (req: Request, res: Response) => {
  try {
    const llave = {
      anoLlave: Number(req.params.anoLlave),
      cont: Number(req.params.cont),
    };
    const data = await corres_model.deleteOne({ llave });
    delete_response("corres", data, `${llave.anoLlave} / ${llave.cont}`, res);
  } catch (error) {
    res.json({ msg: error });
  }
};

export const getCorresF8 = async (req: Request, res: Response) => {
  try {
    const { desde, cantidad } = req.params;
    const { dato } = req.query;
    //const data2 = await corres_model.find()
    const data = await corres_model
      .aggregate([
        {
          $lookup: {
            from: "tipco",
            localField: "tipoCorres",
            foreignField: "codigo",
            as: "tipco",
          },
        },
        // {
        //   $unwind: "$tipco[0]",
        // },
        {
          $lookup: {
            from: "terce",
            localField: "nit",
            foreignField: "codigo",
            as: "terce",
          },
        },
        // {
        //   $unwind: "$terce[0]",
        // },
      ])
      .project({
        _id: 0,
        llave: 1,
        fecha: 1,
        nit: 1,
        tipoCorres: 1,
        descrip_tipco: {
          $concat: [{ $arrayElemAt: ["$tipco.descripcion", 0] }],
        },
        descrip: 1,
        descrip_ter: { $concat: [{ $arrayElemAt: ["$terce.descrip", 0] }] },
        ser: 1,
        operdiri: 1,
        dep: 1,
        fol: 1,
        fold: 1,
        esta: 1, //se debe condicionar
        descrip_esta: {
          $concat: [
            {
              $cond: {
                if: { $eq: ["$esta", 1] },
                then: "PTE LEER",
                else: "",
              },
            },
            {
              $cond: {
                if: { $eq: ["$esta", 2] },
                then: "LEIDA SIN RTA",
                else: "",
              },
            },
            {
              $cond: {
                if: { $eq: ["$esta", 3] },
                then: "LEIDA EXITOSA",
                else: "",
              },
            },
            {
              $cond: {
                if: { $eq: ["$esta", 4] },
                then: "RTA CONFIRMADO",
                else: "",
              },
            },
          ],
        },
        anex: 1,
        tipoAnexo: 1,
        otroAnexo: 1,
        fechaEntre: 1,
        nroGuia: 1,
        codAux: 1,
        contResPon: 1,
        nroEnvio: 1,
        proceden: 1,
        deptoremi: 1,
        manejo: 1,
        holding: 1,
        centroCos: 1,
        ciudad: 1,
        cargoOps: 1,
        diasTipco: 1,
        medioIng: 1,
        fechaModi: 1,
        contAtnt1: 1,
        contAtnt2: 1,
        contAtnt3: 1,
      })
      .match({
        $or: [
          { nit: { $regex: dato, $options: "i" } },
          { descrip: { $regex: dato, $options: "i" } },
          { descrip_esta: { $regex: dato, $options: "i" } },
          { descrip_ter: { $regex: dato, $options: "i" } },
          { descrip_tico: { $regex: dato, $options: "i" } },
          { llave: { $regex: dato, $options: "i" } },
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

export const envioCorreos = async (req: Request, res: Response) => {
  try {
    const { name, email, placa, phone } = req.body;

    const config = {
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: "victorcobo22@gmail.com",
        pass: "vluwtqclqxxvuhgc",
      },
    };

    const msg = {
      from: "victorcobo22@gmail.com",
      to: "victorcobo22@gmail.com",
      subject: "Prueba perro",
      text: "Evio de correo",
      attachments: [
        {
          filename: "file.pdf",
          path: __dirname + "/APUESTA.pdf",
          contentType: "application/pdf",
        },
      ],
    };

    const trasnport = nodemailer.createTransport(config);

    const info = await trasnport.sendMail(msg);

    res.json(info);
  } catch (error) {
    console.log(error);

    res.json({ msg: error });
  }
};

export const ultCorres = async (req: Request, res: Response) => {
  try {
    // const data = await corres_model.find().sort({ $natural: -1 }).limit(1);
    const data = await corres_model
      .find(
        {},
        {
          _id: 0,
          llave: 1,
          fecha: 1,
          llaveR: {
            $concat: [
              { $toString: "$llave.anoLlave" },
              { $toString: "$llave.cont" },
            ],
          },
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
      .sort({ _id: -1 })
      .limit(1);
    get_all_response(data[0], res);
  } catch (error) {
    console.error(error);
    res.json({ msg: error });
  }
};

export const guardarPdf = async (req: Request, res: Response) => {
  try {
    const filename = `${req.params.anoLlave}${req.params.cont}`;
    fs.readFile(`.\\pdf\\${filename}.pdf`, function (err, data) {
      if (err) throw err;
      const pdf = data.toString("base64"); //PDF WORKS

      new pdf_model({ llave: filename, archivo: pdf }).save((err: any) => {
        if (err) res.json(err);
        else res.json({ N1: "guardado" });
      });

      fs.unlink(`.\\pdf\\${filename}.pdf`, (err) => {
        if (err) throw err;
      });
    });
  } catch (error) {}
};

export const guardarPdf_res = async (req: Request, res: Response) => {
  try {
    const filename = `${req.params.anoLlave}${req.params.cont}`;
    fs.readFile(`.\\pdf\\${filename}.pdf`, function (err, data) {
      if (err) throw err;
      const pdf = data.toString("base64"); //PDF WORKS

      new pdf_res_model({ llave: filename, archivo: pdf }).save((err: any) => {
        if (err) res.json(err);
        else res.json({ N1: "guardado" });
      });

      fs.unlink(`.\\pdf\\${filename}.pdf`, (err) => {
        if (err) throw err;
      });
    });
  } catch (error) {}
};

export const buscarPdf = async (req: Request, res: Response) => {
  try {
    const llave = `${req.params.anoLlave}${req.params.cont}`
    const datos = await pdf_model.findOne({llave:llave});
    res.contentType("application/pdf");
    let base64 = ""
    if(datos?.archivo) base64 = datos?.archivo.toString()
    var pdf = Buffer.from(base64, 'base64')
    res.send(pdf);
  } catch (error) {}
};
export const buscarPdf_res = async (req: Request, res: Response) => {
  try {
    const llave = `${req.params.anoLlave}${req.params.cont}`
    const datos = await pdf_res_model.findOne({llave:llave});
    res.contentType("application/pdf");
    let base64 = ""
    if(datos?.archivo) base64 = datos?.archivo.toString()
    var pdf = Buffer.from(base64, 'base64')
    res.send(pdf);
  } catch (error) {}
};
