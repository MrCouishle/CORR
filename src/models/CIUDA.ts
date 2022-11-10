import mongoose, { Schema, model } from "mongoose";

mongoose.pluralize(null);

interface ciuda {
  ubicacion: string;
  direct: string;
  subdirect: string;
  codCiu: {
    dptCiu: string;
    ciuCiu: string;
  };
  nombre: string;
  pais: string;
  actbarrios: string;
  increm: string;
}

const ciuda_schema = new Schema<ciuda>({
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
  codCiu: {
    dptCiu: {
      type: String,
      required: true,
    },
    ciuCiu: {
      type: String,
      required: true,
    },
  },
  nombre: {
    type: String,
    required: true,
  },
  pais: {
    type: String,
    required: true,
  },
  actbarrios: {
    type: String,
    required: true,
  },
  increm: {
    type: String,
    required: true,
  },
});

ciuda_schema.index({ llave: 1 }, { unique: true });

export const ciuda_model = model<ciuda>("ciuda", ciuda_schema);
