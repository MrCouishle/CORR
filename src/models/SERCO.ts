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
    required: true,
  },
  direct: {
    type: String,
    required: true,
  },
  subdirect: {
    type: String,
    required: true,
  },
  codigo: {
    type: String,
    required: true,
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
    required: true,
  },
  fechaMod: {
    type: String,
    required: true,
  },
});

serco_schema.index({ llave: 1 }, { unique: true });

export const serco_model = model<serco>("serco", serco_schema);