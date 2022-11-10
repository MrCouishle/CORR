import mongoose, { Schema, model } from "mongoose";

mongoose.pluralize(null);

interface holding {
  ubicacion: string;
  direct: string;
  subdirect: string;
  codigo: string;
  descripcion: string;
  activa: string;
}

const holding_schema = new Schema<holding>({
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
  activa: {
    type: String,
    required: true,
  },
});

holding_schema.index({ llave: 1 }, { unique: true });

export const holding_model = model<holding>("holding", holding_schema);