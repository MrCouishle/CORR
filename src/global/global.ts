import { Response, Request, NextFunction } from "express";
import jwt from "jsonwebtoken";
import cron from "node-cron";
import bcrypt from "bcrypt";
import { usuvue_model } from "../models/USUVUE";

export const maxlength = (num: Number) =>
  `({PATH}): {VALUE} sobrepasa el máximo de caracteres permitido (${num})`;
export const minlength = (num: Number) =>
  `({PATH}): {VALUE} el minimo de caracteres permitido es (${num})`;

export const concat_cod = (elements: any) => {
  if (Array.isArray(elements)) return elements.join(" | ");
  else return Object.values(elements).join(" | ");
};

export const encabezado = {
  ubicacion: {
    type: String,
    default: "",
  },
  direct: {
    type: String,
    default: "",
  },
  subdirect: {
    type: String,
    default: "",
  },
};

export const omitirId = {
  _id: 0,
  ubicacion: 0,
  direct: 0,
  subdirect: 0,
  //directorio: 0,
  subdirectorio: 0,
};

export const codCiu_schema = {
  //type:mongoose.Types.ObjectId, ref:'ciudad',
  dpt: {
    type: String,
    maxlength: [2, maxlength(2)],
  },
  ciu: {
    type: String,
    maxlength: [3, maxlength(3)],
  },
};

export const fecha_schema = {
  ano: {
    type: String,
    maxlength: [4, maxlength(4)],
    default: "1111",
  },
  mes: {
    type: String,
    maxlength: [2, maxlength(2)],
    enum: {
      values: [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
      ],
      message: "Los meses van de 1- 12. Valor recibido: {VALUE}.",
    },
    default: "01",
  },
  dia: {
    type: String,
    maxlength: [2, maxlength(2)],
    enum: {
      values: [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
        "28",
        "29",
        "30",
        "31",
      ],
      message: "Los días van de 1 - 31. Valor recibido: {VALUE}.",
    },
    default: "01",
  },
};

/* MIDDLEWARE 💡 */

export function null_to_0(next: any, self: any) {
  for (let i in self) {
    if (self[i] === null) self[i] = 0;
  }
  next();
}

/* CONTROllERS 💡 */

// export async function validarExitenciaCiudad(dpt: string, ciu: string) {
//   const codigo = { dpt, ciu };
//   try {
//     const data = await ciudadModel.find({ codCiu: codigo });
//     if (data.length > 0) {
//       return true;
//     } else {
//       return false;
//     }
//   } catch (error) {
//     return error;
//   }
// }

// export async function validar_existencia_pais_departamento(
//   cod_pais: string,
//   cod_departamento: string
// ) {
//   try {
//     const pais = await paisModel.findOne({ codigo: cod_pais });
//     const departamento = await departamentoModel.findOne({
//       codigo: cod_departamento,
//     });

//     if (pais && departamento) return true;
//   } catch (error) { }
// }

/*  CRONTROLLERS RESPONSE 💡 */

export const delete_response = (
  nom: String,
  doc: any,
  codigo = "",
  res: Response
) => {
  if (doc === null) res.json({ msg: "No existe documento" }).status(204);
  else if (doc.deletedCount == 0)
    res
      .json({
        msg: `El código (${codigo}) de ${nom} no existe.`,
        cod_error: "01",
      })
      .status(204);
  else res.json({ N1: "eliminado" }).status(200);
};

export const edit_response = (
  nom: String,
  doc: any,
  codigo = "",
  res: Response
) => {
  if (doc === null)
    res.json({ msg: "No existe documento", cod_error: "01" }).status(204);
  else if (doc.matchedCount == 0)
    res
      .json({
        msg: `El código (${codigo}) de ${nom} no existe.`,
        cod_error: "01",
      })
      .status(204);
  else if (doc.acknowledged === false) res.json({ msg: "error" });
  else res.json({ N1: "editado" }).status(200);
};

export const get_response = (
  nom: String,
  doc: any,
  codigo: any,
  res: Response
) => {
  if (doc === null || doc === undefined || doc.length < 1) {
    res
      .json({
        msg: `El código (${codigo}) de ${nom} no existe.`,
        cod_error: "01",
      })
      .status(204);
  } else res.json(doc);
};

export const get_all_response = (doc: any, res: Response) => {
  if (doc.length === 0)
    res.json({ msg: `No hay datos disponibles.`, cod_error: "01" }).status(200);
  else res.json(doc).status(204);
};

export const concatenarCodigos = (datos: any) => {
  let concatenado: any;
  for (const i in datos) {
    if (Object.prototype.hasOwnProperty.call(datos, i)) {
      concatenado.push(datos[i]);
    }
  }
  return concatenado.join("");
};

export async function validar_catidad(model: any) {
  try {
    const data = model.find();
    if (data.length > 0) return true;
    else return false;
  } catch (error) {
    return error;
  }
}

export const validarJwt = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header("x_token");
  if (!token) {
    console.log("Se intento ingresar sin token");
    return res.status(401).json({
      msg: "No tienes acceso.",
    });
  }

  try {
    jwt.verify(token, `${process.env.SECRETKEY}`);
    return next();
  } catch (error) {
    return res.status(401).json({
      msg: "Acceso denegado, no tiene token correcto",
    });
  }
};

export const generarJwt = (uid = "") => {
  return new Promise((resolve, reject) => {
    const payload = { uid };
    jwt.sign(
      payload,
      `${process.env.SECRETKEY}`,
      {
        expiresIn: "24h",
      },
      (err, token) => {
        if (err) {
          console.log(err);
          reject("No se genero el token");
        } else {
          resolve(token);
        }
      }
    );
  });
};

//Cambio de contraseña automatico para GEBC

/*
     * * * * * *
     | | | | | |
     | | | | | día de la semana
     | | | | mes
     | | | día del mes
     | | hora
     | minuto
     segundo (opcional)
*/

/*
	día de la semana: 0-7  (0 y 7 representan al domingo)
	mes: 1-12
	día del mes: 1-31
	hora: 0-23
	minuto: 0-59
	segundo: 0-59
*/

cron.schedule("1 23 * * *", () => {
  //cron.schedule("*/5 * * * * *", () => {
  cambio_contra_automatico();
});

export const cambio_contra_automatico = async () => {
  const fecha = new Date();
  const ano = fecha.getFullYear() - 2000;

  const pass = `SC${ano + fecha.getMonth() + 1}${ano + fecha.getDate()}${
    fecha.getMonth() + 1 + fecha.getDate()
  }`;

  console.log(pass);

  const new_password = await bcrypt.hash(pass, 10);

  console.log(new_password);

  const data = await usuvue_model.updateOne(
    { llaveOper: "GEBC" },
    { $set: { clave: new_password } }
  );
};
