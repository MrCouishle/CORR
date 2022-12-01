import { Schema, model } from "mongoose";

interface config {
  ips: Object;
  ubicacion: [];
  fechaCrea: Date;
  fechaModif: Date;
}

const config_schema = new Schema<config>({
  ips: {
    type: Object,
    required: true,
  },
  ubicacion: [],
  fechaCrea: {
    type: Date,
    required: true,
  },
  fechaModif: {
    type: Date,
    required: true,
  },
});


config_schema.index({ips:1}, {unique:true})

export const config_model = model<config>("config", config_schema);
