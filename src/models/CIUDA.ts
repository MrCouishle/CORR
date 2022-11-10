import mongoose, { Schema, model } from "mongoose";

mongoose.pluralize(null);

interface ciuda {
  ubicacion: string;
  direct: string;
  subdirect: string;
  cod_ciu: {
    dpto_ciu: string;
    ciu_ciu: string;
  };
  nombre_ciu: {
    nombre1_ciu: string;
    nombre2_ciu: string;
  };
  pais_ciu: string;
  actbarrios_ciu: string;
  increm_ciu: string;
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
  cod_ciu: {
    dpto_ciu: {
      type: String,
      required: true,
    },
    ciu_ciu: {
      type: String,
      required: true,
    },
  },
  nombre_ciu: {
    nombre1_ciu: {
      type: String,
      required: true,
    },
    nombre2_ciu: {
      type: String,
      required: true,
    },
  },
  pais_ciu: {
    type: String,
    required: true,
  },
  actbarrios_ciu: {
    type: String,
    required: true,
  },
  increm_ciu: {
    type: String,
    required: true,
  },
});

ciuda_schema.index({ llave: 1 }, { unique: true });

export const ciuda_model = model<ciuda>("ciuda", ciuda_schema);
