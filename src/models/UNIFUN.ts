import mongoose, { Schema, model } from "mongoose";

mongoose.pluralize(null);

interface unifun {
  ubicacion: string;
  direct: string;
  subdirect: string;
  cod_unifun: string;
  descrip_unifun: {
    descrip1_unifun: string;
    descrip2_unifun: string;
  };
}

const unifun_schema = new Schema<unifun>({
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
  cod_unifun: {
    type: String,
    required: true,
  },
  descrip_unifun: {
    descrip1_unifun: {
      type: String,
      required: true,
    },
    descrip2_unifun: {
      type: String,
      required: true,
    },
  },
});

unifun_schema.index({ llave: 1 }, { unique: true });

export const unifun_model = model<unifun>("unifun", unifun_schema);