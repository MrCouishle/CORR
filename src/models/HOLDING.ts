import mongoose, { Schema, model } from "mongoose";

mongoose.pluralize(null);

interface holding {
  ubicacion: string;
  direct: string;
  subdirect: string;
  cod_holding: string;
  descrip_holding: {
    descrip1_holding: string;
    descrip2_holding: string;
  };
  activa_holding: string;
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
  cod_holding: {
    type: String,
    required: true,
  },
  descrip_holding: {
    descrip1_holding: {
      type: String,
      required: true,
    },
    descrip2_holding: {
      type: String,
      required: true,
    },
  },
  activa_holding: {
    type: String,
    required: true,
  },
});

holding_schema.index({ llave: 1 }, { unique: true });

export const holding_model = model<holding>("holding", holding_schema);