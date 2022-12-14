import { Request, Response } from "express";
import nodemailer from "nodemailer";
import { concatenarCodigos, delete_response, edit_response, get_all_response, get_response, omitirId } from "../global/global";
import { corres_model } from "../models/CORRES";

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
    const llave = {
      anoLlave: Number(req.params.anoLlave),
      cont: Number(req.params.cont),
    };
    // const data = await corres_model.findOne({ llave }, omitirId);
    const data = await corres_model
      .aggregate([
        {
          $project: {
            _id: 0,
            fecha: { $substr: ["$fecha", 0, 10] },
            horaFecha: {$concat:[{$toString:{ $hour: "$fecha" }},":",{$toString:{ $minute: "$fecha" }}]},
            fechaCau: { $substr: ["$fechaCau", 0, 10] },
            fechaEntre: { $substr: ["$fechaEntre", 0, 10] },
            fechaFact: { $substr: ["$fechaFact", 0, 10] },
            fechaModi: { $substr: ["$fechaModi", 0, 10] },
            fechaPag: { $substr: ["$fechaPag", 0, 10] },
            ubicacion: 1,
            direct: 1,
            subdirect: 1,
            llave: 1,
            tablaOper: 1,
            errorRips: 1,
            llaveResp: 1,
            codAux: 1,
            nit: 1,
            tipoCorres: 1,
            descrip: 1,
            ser: 1,
            operdiri: 1,
            dep: 1,
            fol: 1,
            fold: 1,
            esta: 1,
            anex: 1,
            tipoAnexo: 1,
            otroAnexo: 1,
            nroFact: 1,
            monto: 1,
            nroGuia: 1,
            persentre: 1,
            observ: 1,
            tablaDep: 1,
            descripcion: 1,
            nroEnvio: 1,
            proceden: 1,
            deptoremi: 1,
            manejo: 1,
            holding: 1,
            centroCos: 1,
            ciudad: 1,
            cargoOps: 1,
            loteCau: 1,
            comprobCau: 1,
            lotePag: 1,
            comprobPag: 1,
            oper: 1,
            operModi: 1,
            diasTipco: 1,
            medioIng: 1,
            contAtnt1: 1,
            contAtnt2: 1,
            contAtnt3: 1,
          },
        },
      ])
      .match({
        llave: llave,
      });
    get_response("corres", data[0], `${llave.anoLlave} / ${llave.cont}`, res);
  } catch (error) {
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
    console.log(dato);
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
        llave: {
          $concat: [{ $toString: ["$llave.anoLlave"] }, { $toString: ["$llave.cont"] }],
        },
        fecha: 1,
        nit: { $concat: [{ $toString: ["$nit"] }] },
        tipoCorres: 1,
        descrip_tipco: { $concat: [{ $arrayElemAt: ["$tipco.descripcion", 0] }] },
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
    console.log(data.length);
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
