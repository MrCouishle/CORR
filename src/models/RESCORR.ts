import mongoose, { Schema, model } from "mongoose";

mongoose.pluralize(null);

interface rescorr {
    ubicacion: string;
    direct: string;
    subdirect: string;
    codResp: {    
      anoLlave: {
        type: Number,
        default: 0
      },
      cont: {
        type: Number,
        default: 0
      },
    },
    swRadi: string;
    fecha: string;
    firma: string;
    clMacro: string;
    codigoMacro: {
      type: Number,
      default: 0
    },
    asunto: string;
    tabla: string;
    respon: string;
    cargo: string;
    anoRadi: string;
    contRadi: string;
    fechaRadi: string;
    nit: string;
    tipoCorres: string;
    descrip: string;
    ser: string;
    operdiri: string;
    dep: string;
    esta: string;
    codAuxco: string;
    codUnifun: string;
    proceden: string;
    oper: string;
    operModi: string;
    fechaModi: string;
    numeroFact: string;
    monto: string;
    nroGuia: string;
    perRec: string;
    medio: string;
  }

const rescorr_schema = new Schema<rescorr>({
    ubicacion: {
      type: String,
      default: " "
    },
    direct: {
      type: String,
      default: " "
    },
    subdirect: {
      type: String,
      default: " "
    },
    codResp: {    
      anoLlave: {
        type: Number,
        default: 0
      },
      cont: {
        type: Number,
        default: 0
      },
    },
    swRadi: {
      type: String,
      default: " "
    },
    fecha: {
      type: String,
      default: " "
    },
    firma: {
      type: String,
      default: " "
    },
    clMacro: {
      type: String,
      default: " "
    },
    codigoMacro: {
      type: Number,
      default: 0
    },
    asunto: {
      type: String,
      default: " "
    },
    tabla: {
      type: String,
      default: " "
    },
    respon: {
      type: String,
      default: " "
    },
    cargo: {
      type: String,
      default: " "
    },
    anoRadi: {
      type: String,
      default: " "
    },
    contRadi: {
      type: String,
      default: " "
    },
    fechaRadi: {
      type: String,
      default: " "
    },
    nit: {
      type: String,
      default: " "
    },
    tipoCorres: {
      type: String,
      default: " "
    },
    descrip: {
      type: String,
      default: " "
    },
    ser: {
      type: String,
      default: " "
    },
    operdiri: {
      type: String,
      default: " "
    },
    dep: {
      type: String,
      default: " "
    },
    esta: {
      type: String,
      default: " "
    },
    codAuxco: {
      type: String,
      default: " "
    },
    codUnifun: {
      type: String,
      default: " "
    },
    proceden: {
      type: String,
      default: " "
    },
    oper: {
      type: String,
      default: " "
    },
    operModi: {
      type: String,
      default: " "
    },
    fechaModi: {
      type: String,
      default: " "
    },
    numeroFact: {
      type: String,
      default: " "
    },
    monto: {
      type: String,
      default: " "
    },
    nroGuia: {
      type: String,
      default: " "
    },
    perRec: {
      type: String,
      default: " "
    },
    medio: {
      type: String,
      default: " "
    },
  })

rescorr_schema.index({ llave: 1 }, { unique: true });

export const rescorr_model = model<rescorr>("rescorr", rescorr_schema);