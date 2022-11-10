import mongoose, { Schema, model } from "mongoose";

mongoose.pluralize(null);

interface remidep {
  ubicacion: string;
  direct: string;
  subdirect: string;
  cod_depremi: string;
  descrip_depremi: {
    descrip1_depremi: string;
    descrip2_depremi: string;
  };
}

const remidep_schema = new Schema<remidep>({
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
  cod_depremi: {
    type: String,
    required: true,
  },
  descrip_depremi: {
    descrip1_depremi: {
      type: String,
      required: true,
    },
    descrip2_depremi: {
      type: String,
      required: true,
    },
  },
});

remidep_schema.index({ llave: 1 }, { unique: true });

export const remidep_model = model<remidep>("remidep", remidep_schema);