import mongoose, { Schema, model } from "mongoose";

mongoose.pluralize(null);

interface cargops {
  ubicacion: string;
  direct: string;
  subdirect: string;
  codigo: string;
  descripcion: string;
}

const cargops_schema = new Schema<cargops>({
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
});

cargops_schema.index({ llave: 1 }, { unique: true });

export const cargops_model = model<cargops>("cargops", cargops_schema);