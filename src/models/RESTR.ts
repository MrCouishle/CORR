import mongoose, { Schema, model } from "mongoose";

mongoose.pluralize(null);

interface restr {
  ubicacion: string;
  direct: string;
  subdirect: string;
  llaveRest: string;
  opc: [];
  clave: string;
  nombre: string;
  fecha: Date;
  admin: string;
  dias: number;
  depen: number;
  ser: string;
  serial: string;
  id: number;
  bloq: string;
  sucur: string;
  vend: string;
}

const restr_schema = new Schema<restr>({
    ubicacion: {
        type: String,
        default:""
    },
  direct: {
    type: String,
    default:""
  },
  subdirect: {
    type: String,
    default:""
  },
  llaveRest: {
    type: String,
    unique:true
  },
  opc: {
    type: []
  },
  clave: {
    type: String,
    default:""
  },
  nombre: {
    type: String,
    default:""
  },
  fecha: {
    type: Date,
  },
  admin: {
    type: String,
    default:""
  },
  dias: {
    type: Number,
  },
  depen: {
    type: Number,
  },
  ser: {
    type: String,
    default:""
  },
  serial: {
    type: String,
    default:""
  },
  id: {
    type: Number,
  },
  bloq: {
    type: String,
    default:""
  },
  sucur: {
    type: String,
    default:""
  },
  vend: {
    type: String,
    default:""
  },
})

restr_schema.index({ llaveRest: 1 }, { unique: true });

export const restr_model = model<restr>("restr", restr_schema);