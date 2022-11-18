import mongoose, { Schema, model } from "mongoose";

mongoose.pluralize(null);

interface depco {
  ubicacion: string;
  direct: string;
  subdirect: string;
<<<<<<< HEAD
  codigo: Number;
=======
  codigo: number;
>>>>>>> 92120f69f73cfb8e23ec28f2a41ab63377778864
  descripcion: string;
  responsable: string;
  oper: string;
  codSerco: string;
  cargo: string;
  correo: string;
}

const depco_schema = new Schema<depco>({
  ubicacion: {
    type: String,
    default: "",
  },
  direct: {
    type: String,
    default: "",
  },
  subdirect: {
    type: String,
    default: "",
  },
  codigo: {
    type: Number,
    required: true,
    unique: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  responsable: {
    type: String,
    required: true,
  },
  oper: {
    type: String,
    required: true,
  },
  codSerco: {
    type: String,
    required: true,
  },
  cargo: {
    type: String,
    required: true,
  },
  correo: {
    type: String,
    default: "",
  },
});

depco_schema.index({ codigo: 1 }, { unique: true });

export const depco_model = model<depco>("depco", depco_schema);
