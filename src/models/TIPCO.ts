import mongoose, { Schema, model } from "mongoose";

mongoose.pluralize(null);

interface tipco {
  ubicacion: string;
  direct: string;
  subdirect: string;
  cod_tipco: string;
  descrip_tipco: {
    descrip1_tipco: string;
    descrip2_tipco: string;
  };
  dias_tipco: string;
}

const tipco_schema = new Schema<tipco>({
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
  cod_tipco: {
    type: String,
    required: true,
  },
  descrip_tipco: {
    descrip1_tipco: {
      type: String,
      required: true,
    },
    descrip2_tipco: {
      type: String,
      required: true,
    },
  },
  dias_tipco: {
    type: String,
    required: true,
  },
});

tipco_schema.index({ llave: 1 }, { unique: true });

export const tipco_model = model<tipco>("tipco", tipco_schema);