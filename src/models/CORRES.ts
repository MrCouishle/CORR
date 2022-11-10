import mongoose, { Schema, model } from "mongoose";

mongoose.pluralize(null);

interface corres {
  ubicacion: string;
  direct: string;
  subdirect: string;
  llave_pon: {
    ano_llave_pon: string;
    cont_pon: string;
  };
  datos_pon: {
    fecha_pon: {
      ano_pon: string;
      mes_pon: string;
      dia_pon: string;
    };
    hora_pon: {
      hr_pon: string;
      mn_pon: string;
    };
    nit_pon: string;
    tipo_corres_pon: string;
    descrip_pon: string;
    ser_pon: string;
    operdiri_pon: string;
    dep_pon: string;
    fol_pon: string;
    fold_pon: string;
    esta_pon: string;
    anex_pon: string;
    tipo_anexo_pon: string;
    otro_anexo_pon: string;
    nro_fact_pon: string;
    monto_pon: string;
    fecha_fact_pon: {
      ano_ini_pon: string;
      mes_ini_pon: string;
      dia_ini_pon: string;
    };
    fecha_entre_pon: {
      ano_fin_pon: string;
      mes_fin_pon: string;
      dia_fin_pon: string;
    };
    nro_guia_pon: string;
    persentre_pon: string;
    observ_pon: {
      reng_pon: [];
    };
    tabla_dep_pon: [
      {
        dep_tab_pon: string;
        esta_tab_pon: string;
      }
    ];
    cod_auxco_pon: string;
    tabla_oper_pon: [
      {
        operdiri1_pon: string;
      }
    ];
    llave_resp_pon: {
      ano_res_pon: string;
      cont_res_pon: string;
    };
    error_rips_pon: {
      nro_rips_pon: string;
    };
    nro_envio_pon: string;
    proceden_pon: string;
    dptoremi_pon: string;
    manejo_pon: string;
    holding_pon: string;
    centro_cos_pon: string;
    ciudad_pon: string;
    cargo_ops_pon: string;
    llave_cau_pon: {
      lote_cau_pon: {
        lote1_cau_pon: string;
        lote2_cau_pon: string;
      };
      comprob_cau_pon: {
        comp1_cau_pon: string;
        comp2_cau_pon: string;
      };
    };
    fecha_cau_pon: {
      ano_cau_pon: string;
      mes_cau_pon: string;
      dia_cau_pon: string;
    };
    llave_pag_pon: {
      lote_pag_pon: {
        lote1_pag_pon: string;
        lote2_pag_pon: string;
      };
      comprob_pag_pon: {
        comp1_pag_pon: string;
        comp2_pag_pon: string;
      };
    };
    fecha_pag_pon: {
      ano_pag_pon: string;
      mes_pag_pon: string;
      dia_pag_pon: string;
    };
    oper_pon: string;
    oper_modi_pon: string;
    fecha_modi_pon: {
      ano_modi_pon: string;
      mes_modi_pon: string;
      dia_modi_pon: string;
    };
    dias_tipco_pon: string;
    medio_ing_pon: string;
  };
}

const corres_schema = new Schema<corres>({
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
  llave_pon: {
    ano_llave_pon: {
        type: String,
        required: true,
    },
    cont_pon: {
        type: String,
        required: true,
    },
  },
  datos_pon: {
    fecha_pon: {
      ano_pon: {
        type: String,
        required: true,
      },
      mes_pon: {
        type: String,
        required: true,
      },
      dia_pon: {
        type: String,
        required: true,
      },
    },
    hora_pon: {
      hr_pon: {
        type: String,
        required: true,
      },
      mn_pon: {
        type: String,
        required: true,
      },
    },
    nit_pon: {
        type: String,
        required: true,
    },
    tipo_corres_pon: {
        type: String,
        required: true,
    },
    descrip_pon: {
        type: String,
        required: true,
    },
    ser_pon: {
        type: String,
        required: true,
    },
    operdiri_pon: {
        type: String,
        required: true,
    },
    dep_pon: {
        type: String,
        required: true,
    },
    fol_pon: {
        type: String,
        required: true,
    },
    fold_pon: {
        type: String,
        required: true,
    },
    esta_pon: {
        type: String,
        required: true,
    },
    anex_pon: {
        type: String,
        required: true,
    },
    tipo_anexo_pon: {
        type: String,
        required: true,
    },
    otro_anexo_pon: {
        type: String,
        required: true,
    },
    nro_fact_pon: {
        type: String,
        required: true,
    },
    monto_pon: {
        type: String,
        required: true,
    },
    fecha_fact_pon: {
      ano_ini_pon: {
        type: String,
        required: true,
      },
      mes_ini_pon: {
        type: String,
        required: true,
      },
      dia_ini_pon: {
        type: String,
        required: true,
      },
    },
    fecha_entre_pon: {
      ano_fin_pon: {
        type: String,
        required: true,
      },
      mes_fin_pon: {
        type: String,
        required: true,
      },
      dia_fin_pon: {
        type: String,
        required: true,
      },
    },
    nro_guia_pon: {
        type: String,
        required: true,
    },
    persentre_pon: {
        type: String,
        required: true,
    },
    observ_pon: {
      reng_pon: [],
    },
    tabla_dep_pon: [
      {
        dep_tab_pon: {
            type: String,
            required: true,
        },
        esta_tab_pon: {
            type: String,
            required: true,
        },
      }
    ],
    cod_auxco_pon: {
        type: String,
        required: true,
    },
    tabla_oper_pon: [
      {
        operdiri1_pon: {
            type: String,
            required: true,
        },
      }
    ],
    llave_resp_pon: {
      ano_res_pon: {
        type: String,
        required: true,
      },
      cont_res_pon: {
        type: String,
        required: true,
      },
    },
    error_rips_pon: {
      nro_rips_pon: {
        type: String,
        required: true,
      },
    },
    nro_envio_pon: {
        type: String,
        required: true,
    },
    proceden_pon: {
        type: String,
        required: true,
    },
    dptoremi_pon: {
        type: String,
        required: true,
    },
    manejo_pon: {
        type: String,
        required: true,
    },
    holding_pon: {
        type: String,
        required: true,
    },
    centro_cos_pon: {
        type: String,
        required: true,
    },
    ciudad_pon: {
        type: String,
        required: true,
    },
    cargo_ops_pon: {
        type: String,
        required: true,
    },
    llave_cau_pon: {
      lote_cau_pon: {
        lote1_cau_pon: {
            type: String,
            required: true,
        },
        lote2_cau_pon: {
            type: String,
            required: true,
        },
      },
      comprob_cau_pon: {
        comp1_cau_pon: {
            type: String,
            required: true,
        },
        comp2_cau_pon: {
            type: String,
            required: true,
        },
      },
    },
    fecha_cau_pon: {
      ano_cau_pon: {
        type: String,
        required: true,
      },
      mes_cau_pon: {
        type: String,
        required: true,
      },
      dia_cau_pon: {
        type: String,
        required: true,
      },
    },
    llave_pag_pon: {
      lote_pag_pon: {
        lote1_pag_pon: {
            type: String,
            required: true,
        },
        lote2_pag_pon: {
            type: String,
            required: true,
        },
      },
      comprob_pag_pon: {
        comp1_pag_pon: {
            type: String,
            required: true,
        },
        comp2_pag_pon: {
            type: String,
            required: true,
        },
      },
    },
    fecha_pag_pon: {
      ano_pag_pon: {
        type: String,
        required: true,
      },
      mes_pag_pon: {
        type: String,
        required: true,
      },
      dia_pag_pon: {
        type: String,
        required: true,
      },
    },
    oper_pon: {
        type: String,
        required: true,
    },
    oper_modi_pon: {
        type: String,
        required: true,
    },
    fecha_modi_pon: {
      ano_modi_pon: {
        type: String,
        required: true,
      },
      mes_modi_pon: {
        type: String,
        required: true,
      },
      dia_modi_pon: {
        type: String,
        required: true,
      },
    },
    dias_tipco_pon: {
        type: String,
        required: true,
    },
    medio_ing_pon: {
        type: String,
        required: true,
    },
  },
});

corres_schema.index({ llave: 1 }, { unique: true });

export const corres_model = model<corres>("corres", corres_schema);