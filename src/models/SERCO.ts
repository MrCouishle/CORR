import mongoose, { Schema, model } from "mongoose";

mongoose.pluralize(null);

interface serco {
  ubicacion: string;
  direct: string;
  subdirect: string;
  cod_serco: string;
  descrip_serco: {
    descrip1_serco: string;
    descrip2_serco: string;
  };
  oper_cre_serco: string;
  fech_cre_serco: {
    ano_cre_serco: string;
    mes_cre_serco: string;
    dia_cre_serco: string;
  };
  oper_mod_serco: string;
  fech_mod_serco: {
    ano_mod_serco: string;
    mes_mod_serco: string;
    dia_mod_serco: string;
  };
}

const serco_schema = new Schema<serco>({
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
  cod_serco: {
    type: String,
    required: true,
  },
  descrip_serco: {
    descrip1_serco: {
        type: String,
        required: true,
    },
    descrip2_serco: {
        type: String,
        required: true,
    },
  },
  oper_cre_serco: {
    type: String,
    required: true,
  },
  fech_cre_serco: {
    ano_cre_serco: {
        type: String,
        required: true,
    },
    mes_cre_serco: {
        type: String,
        required: true,
    },
    dia_cre_serco: {
        type: String,
        required: true,
    },
  },
  oper_mod_serco: {
    type: String,
    required: true,
  },
  fech_mod_serco: {
    ano_mod_serco: {
        type: String,
        required: true,
    },
    mes_mod_serco: {
        type: String,
        required: true,
    },
    dia_mod_serco: {
        type: String,
        required: true,
    },
  },
})
