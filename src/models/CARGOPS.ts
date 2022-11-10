import mongoose, { Schema, model } from "mongoose";

mongoose.pluralize(null);

interface cargops {
  ubicacion: string;
  direct: string;
  subdirect: string;
  cod_cargo: string;
  descrip_cargo: {
    descrip2_cargo: string;
    descrip1_cargo: string;
  };
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
  cod_cargo: {
    type: String,
    required: true,
  },
  descrip_cargo: {
    descrip2_cargo: {
      type: String,
      required: true,
    },
    descrip1_cargo: {
      type: String,
      required: true,
    },
  },
});

cargops_schema.index({ llave: 1 }, { unique: true });

export const cargops_model = model<cargops>("cargops", cargops_schema);