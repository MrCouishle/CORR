import mongoose, { Schema, model } from "mongoose";

mongoose.pluralize(null);

interface depco {
  ubicacion: string;
  direct: string;
  subdirect: string;
  cod_dep: string;
  descrip_dep: string;
  responsable_dep: string;
  oper_dep: string;
  cod_serco_dep: string;
  cargo_dep: string;
  correo_dep: string;
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
  cod_dep: {
    type: String,
    required: true,
  },
  descrip_dep: {
    type: String,
    required: true,
  },
  responsable_dep: {
    type: String,
    required: true,
  },
  oper_dep: {
    type: String,
    required: true,
  },
  cod_serco_dep: {
    type: String,
    required: true,
  },
  cargo_dep: {
    type: String,
    required: true,
  },
  correo_dep: {
    type: String,
    required: true,
  },
});

depco_schema.index({ llave: 1 }, { unique: true });

export const depco_model = model<depco>("depco", depco_schema);
