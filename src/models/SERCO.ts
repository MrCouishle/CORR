import mongoose, { Schema, model } from "mongoose";

mongoose.pluralize(null);

interface serco {
  ubicacion: string;
  direct: string;
  subdirect: string;
  codigo: string;
  descripcion: string;
  operCre: string;
  fechaCre: string;
  operMod: string;
  fechaMod: string;
}

const serco_schema = new Schema<serco>({
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
  codigo: {
    type: String,
    required: true,
    unique: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  operCre: {
    type: String,
    required: true,
  },
  fechaCre: {
    type: String,
    required: true,
  },
  operMod: {
    type: String,
  },
  fechaMod: {
    type: String,
  },
});

serco_schema.index({ codigo: 1 }, { unique: true });

export const serco_model = model<serco>("serco", serco_schema);