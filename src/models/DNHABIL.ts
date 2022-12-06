import mongoose, { Schema, model } from "mongoose";

mongoose.pluralize(null);

interface dia_no_habil {
  dia: string;
  ano: string;
  mes: string;
}

const dn_habil = new Schema<dia_no_habil>({
  dia: {
    type: String,
    default: "",
  },
  ano: {
    type: String,
    default: "",
  },
  mes: {
    type: String,
    default: "",
  },
});

dn_habil.index({ codigo: 1 }, { unique: true });

export const dia_no_habil_model = model<dia_no_habil>("dia_no_habil", dn_habil);
