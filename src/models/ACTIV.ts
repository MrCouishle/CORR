import mongoose, { Schema, model } from "mongoose";

mongoose.pluralize(null);

interface activ {
  ubicacion: string;
  direct: string;
  subdirect: string;
  reg_act: {
    cod_act: string;
    nombre_act: string;
  };
}

const activ_schema = new Schema<activ>({
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
  reg_act: {
    cod_act: {
      type: String,
      required: true,
    },
    nombre_act: {
      type: String,
      required: true,
    },
  },
});

activ_schema.index({ llave: 1 }, { unique: true });

export const activ_model = model<activ>("activ", activ_schema);
