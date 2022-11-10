import mongoose, { Schema, model } from "mongoose";

mongoose.pluralize(null);

interface auxtip {
  ubicacion: string;
  direct: string;
  subdirect: string;
  codigo: string;
  codSerco: string;
  descripcion: string;
}

const auxtip_schema = new Schema<auxtip>({
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
  codSerco: {
      type: String,
      required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
});

auxtip_schema.index({ llave: 1 }, { unique: true });

export const auxtip_model = model<auxtip>("auxtip", auxtip_schema);
