import mongoose, { Schema, model } from "mongoose";

mongoose.pluralize(null);

interface depco {
  ubicacion: string;
  direct: string;
  subdirect: string;
  codigo: string;
  descripcion: string;
  responsable: string;
  oper: string;
  codSerco: string;
  cargo: string;
  correo: string;
}

const depco_schema = new Schema<depco>({
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
  responsable: {
    type: String,
    required: true,
  },
  oper: {
    type: String,
    required: true,
  },
  codSerco: {
    type: String,
    required: true,
  },
  cargo: {
    type: String,
    required: true,
  },
  correo: {
    type: String,
    required: true,
  },
});

depco_schema.index({ llave: 1 }, { unique: true });

export const depco_model = model<depco>("depco", depco_schema);
