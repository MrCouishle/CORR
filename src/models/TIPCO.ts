import mongoose, { Schema, model } from "mongoose";

mongoose.pluralize(null);

interface tipco {
  ubicacion: string;
  direct: string;
  subdirect: string;
  codigo: string;
  descripcion: string;
  dias: string;
}

const tipco_schema = new Schema<tipco>({
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
  dias: {
    type: String,
    required: true,
  },
});

tipco_schema.index({ llave: 1 }, { unique: true });

export const tipco_model = model<tipco>("tipco", tipco_schema);