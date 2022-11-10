import mongoose, { Schema, model } from "mongoose";

mongoose.pluralize(null);

interface macorr {
  ubicacion: string;
  direct: string;
  subdirect: string;
  llave_macrocorr: {
    cl_macrocorr: string;
    codigo_macrocorr: string;
  };
  detalle_macrocorr: string;
  tabla_macrocorr: {
    reng_macrocorr: [];
  };
  oper_macrocorr: string;
  fech_oper_macrocorr: string;
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
  llave_macrocorr: {
    cl_macrocorr: {
      type: String,
      required: true,
    },
    codigo_macrocorr: {
      type: String,
      required: true,
    },
  },
  detalle_macrocorr: {
    type: String,
    required: true,
  },
  tabla_macrocorr: {
    reng_macrocorr: [],
  },
  oper_macrocorr: {
    type: String,
    required: true,
  },
  fech_oper_macrocorr: {
    type: String,
    required: true,
  },
});

macorr_schema.index({ llave: 1 }, { unique: true });

export const macorr_model = model<macorr>("macorr", macorr_schema);