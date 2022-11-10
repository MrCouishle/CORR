import mongoose, { Schema, model } from "mongoose";

mongoose.pluralize(null);

interface rescorr {
  ubicacion: string;
  direct: string;
  subdirect: string;
  llave_resp: {
    ano_llave_resp: string;
    cont_resp: string;
  };
  sw_radi_resp: string;
  datos_resp: {
    fecha_resp: {
      ano_resp: string;
      mes_resp: string;
      dia_resp: string;
    };
    hora_resp: {
      hr_resp: string;
      mn_resp: string;
    };
    firma_resp: string;
    llave_macro_resp: {
      cl_macro_resp: string;
      codigo_macro_resp: string;
    };
    asunto_resp: string;
    tabla_resp: {
      reng_resp: [];
    };
    respon_resp: string;
    cargo_resp: string;
  };
  datos_radi_resp: {
    llave_radi_resp: {
      ano_radi_resp: string;
      cont_radi_resp: string;
    };
    fecha_radi_resp: {
      ano_radi2_resp: string;
      es_radi_resp: string;
      dia_radi_resp: string;
    };
    hora_radi_resp: {
      hr_radi_resp: string;
      mn_radi_resp: string;
    };
    nit_resp: string;
    tipo_corres_resp: string;
    descrip_resp: string;
    ser_resp: string;
    operdiri_resp: string;
    dep_resp: string;
    esta_resp: string;
    cod_auxco_resp: string;
    cod_unifun_resp: string;
    proceden_resp: string;
    oper_resp: string;
    oper_modi_resp: string;
    fecha_modi_resp: {
      ano_modi_resp: string;
      mes_modi_resp: string;
      dia_modi_resp: string;
    };
    nro_fact_resp: string;
    monto_resp: string;
    nro_guia_resp: string;
    per_rec_resp: string;
    medio_resp: string;
  };
}

const rescorr_schema = new Schema<rescorr>({
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
  llave_resp: {
    ano_llave_resp: {
      type: String,
      required: true,
    },
    cont_resp: {
      type: String,
      required: true,
    },
  },
  sw_radi_resp: {
    type: String,
    required: true,
  },
  datos_resp: {
    fecha_resp: {
      ano_resp: {
        type: String,
        required: true,
      },
      mes_resp: {
        type: String,
        required: true,
      },
      dia_resp: {
        type: String,
        required: true,
      },
    },
    hora_resp: {
      hr_resp: {
        type: String,
        required: true,
      },
      mn_resp: {
        type: String,
        required: true,
      },
    },
    firma_resp: {
      type: String,
      required: true,
    },
    llave_macro_resp: {
      cl_macro_resp: {
        type: String,
        required: true,
      },
      codigo_macro_resp: {
        type: String,
        required: true,
      },
    },
    asunto_resp: {
      type: String,
      required: true,
    },
    tabla_resp: {
      reng_resp: [],
    },
    respon_resp: {
      type: String,
      required: true,
    },
    cargo_resp: {
      type: String,
      required: true,
    },
  },
  datos_radi_resp: {
    llave_radi_resp: {
      ano_radi_resp: {
        type: String,
        required: true,
      },
      cont_radi_resp: {
        type: String,
        required: true,
      },
    },
    fecha_radi_resp: {
      ano_radi2_resp: {
        type: String,
        required: true,
      },
      es_radi_resp: {
        type: String,
        required: true,
      },
      dia_radi_resp: {
        type: String,
        required: true,
      },
    },
    hora_radi_resp: {
      hr_radi_resp: {
        type: String,
        required: true,
      },
      mn_radi_resp: {
        type: String,
        required: true,
      },
    },
    nit_resp: {
      type: String,
      required: true,
    },
    tipo_corres_resp: {
      type: String,
      required: true,
    },
    descrip_resp: {
      type: String,
      required: true,
    },
    ser_resp: {
      type: String,
      required: true,
    },
    operdiri_resp: {
      type: String,
      required: true,
    },
    dep_resp: {
      type: String,
      required: true,
    },
    esta_resp: {
      type: String,
      required: true,
    },
    cod_auxco_resp: {
      type: String,
      required: true,
    },
    cod_unifun_resp: {
      type: String,
      required: true,
    },
    proceden_resp: {
      type: String,
      required: true,
    },
    oper_resp: {
      type: String,
      required: true,
    },
    oper_modi_resp: {
      type: String,
      required: true,
    },
    fecha_modi_resp: {
      ano_modi_resp: {
        type: String,
        required: true,
      },
      mes_modi_resp: {
        type: String,
        required: true,
      },
      dia_modi_resp: {
        type: String,
        required: true,
      },
    },
    nro_fact_resp: {
      type: String,
      required: true,
    },
    monto_resp: {
      type: String,
      required: true,
    },
    nro_guia_resp: {
      type: String,
      required: true,
    },
    per_rec_resp: {
      type: String,
      required: true,
    },
    medio_resp: {
      type: String,
      required: true,
    },
  },
});

rescorr_schema.index({ llave: 1 }, { unique: true });

export const rescorr_model = model<rescorr>("rescorr", rescorr_schema);