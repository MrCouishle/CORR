import mongoose, { Schema, model } from "mongoose";

mongoose.pluralize(null);

interface macorr {
  ubicacion: string;
  direct: string;
  subdirect: string;
  llave: {
    cl: string;
    codigo: number;
  };
  detalle: string;
  tabla: string;
  oper: string;
  fechOper: Date;
}

const macorr_schema = new Schema<macorr>({
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
  llave: {
    cl: {
      type: String,
      required: true,
    },
    codigo: {
      type: Number,
      required: true,
    },
  },
  detalle: {
    type: String,
    required: true,
  },
  tabla: {
    type: String,
    required: true,
  },
  oper: {
    type: String,
    required: true,
  },
  fechOper: {
    type: Date,
    required: true,
  },
});

macorr_schema.index({ llave: 1 }, { unique: true });

export const macorr_model = model<macorr>("macorr", macorr_schema);