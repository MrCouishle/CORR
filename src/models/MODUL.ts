import { Schema, model } from "mongoose";

interface modul {
  contab: string;
  modulos: [];
}

const modulos = new Schema({
  cod: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  estado: {
    type: Boolean,
    default: false,
  },
});

const modul_schema = new Schema<modul>({
  contab: {
    type: String,
    required: true,
    unique:true
  },
  modulos: {
    type:[],
    required:true
  },
});

export const modul_model = model<modul>("modul", modul_schema);
