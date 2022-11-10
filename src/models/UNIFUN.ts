import mongoose, { Schema, model } from "mongoose";

mongoose.pluralize(null);

interface unifun {
  ubicacion: string;
  direct: string;
  subdirect: string;
  codigo: string;
  descripcion: string;
}

const unifun_schema = new Schema<unifun>({
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

unifun_schema.index({ llave: 1 }, { unique: true });

export const unifun_model = model<unifun>("unifun", unifun_schema);