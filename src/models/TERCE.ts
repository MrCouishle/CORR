import mongoose, { Schema, model } from "mongoose";

mongoose.pluralize(null);

interface terce {
  ubicacion: string;
  direct: string;
  subdirect: string;
  cod_tercero: {
    cod_ter: string;
  };
  datos_busq_ter: {
    descrip_ter: {
      descrip1_ter: {
        ini1_ter: string;
        ini2_ter: string;
      };
      descrip2_ter: string;
    };
    datos_tercero: {
      direcc_ter: {
        direcc1_ter: string;
        direcc2_ter: string;
      };
      dv_ter: string;
      zona_ter: {
        zona1_ter: string;
        zona2_ter: string;
      };
      ruta_ter: string;
      orden_ter: string;
      bloq_ter: string;
      tipo_id_ter: string;
      grado_ter: string;
      calific_ter: string;
      reg_iva_ter: string;
      rut_ter: string;
      convenio_ter: {
        convenio1_ter: string;
        convenio2_ter: string;
      };
      plazo_ter: string;
      telefono_ter: {
        indica_ter: string;
        tele_ter: string;
      };
      nit_ter: string;
      act_ter: string;
      vendedor_ter: string;
      entidad_ter: string;
      retenedor_ter: string;
      factor_ter: string;
      cod_ciu_ter: {
        dpto_ciu_ter: string;
        ciud_ciu_ter: string;
      };
      pago_ter: string;
      exent_ret_ter: string;
      ret_iva_ter: string;
      dato_veh_ter: {
        marca_veh: string;
        empresa_veh: string;
        nro_veh: string;
        placa_veh: {
          placa1_veh: string;
          placa2_veh: string;
        };
        fecha_alin_veh: string;
        fecha_cump_veh: {
          ano_nac_ter2: string;
          mes_cump_veh: string;
          dia_cump_veh: string;
        };
      };
      datos_ref_ter: {
        cant_ter: string;
        cupo_ter: string;
        refer1_ter: {
          refer1a_ter: string;
          refer1b_ter: {
            refer1b1_ter: string;
            refer1b2_ter: string;
          };
        };
        refer2_ter: string;
        refer3_ter: string;
        cargo_ter: string;
        seguro_ter: string;
        datacre_ter: string;
        fecha_cre_ter: {
          ano_cre_ter: string;
          mes_cre_ter: string;
          dia_cre_ter: string;
        };
      };
    };
    descrip_ter2: {
      apel1_ter2: string;
      apel2_ter2: string;
      nomb1_ter2: {
        nomb1a_ter2: string;
        nomb1b_ter2: string;
      };
    };
  };
  ref1_ter2: {
    nom_ref1_ter2: string;
    dir_ref1_ter2: string;
    tel_ref1_ter2: string;
    rel_ref1_ter2: string;
  };
  ref2_ter2: {
    nom_ref2_ter2: string;
    dir_ref2_ter2: string;
    tel_ref2_ter2: string;
    rel_ref2_ter2: string;
  };
  ref3_ter2: {
    nom_ref3_ter2: string;
    dir_ref3_ter2: string;
    tel_ref3_ter2: string;
    rel_ref3_ter2: string;
  };
  trab_ter2: {
    nom_trab_ter2: string;
    dir_trab_ter2: string;
    tel_trab_ter2: string;
    car_trab_ter2: string;
    sue_trab_ter2: string;
    ant_trab_ter2: string;
  };
  ciu_exp_ter2: {
    dpto_exp_ter2: string;
    ciud_exp_ter2: string;
  };
  entid_afi_ter2: string;
  fecha_afi_ter2: {
    ano_afi_ter2: string;
    mes_afi_ter2: string;
    dia_afi_ter2: string;
  };
  e_mail_ter2: string;
  gran_contrib_ter: string;
  ret_iva_compra: string;
  activ_ica: string;
  embargos_ter2: {
    embarg1_ter2: string;
    embarg2_ter2: string;
  };
  porc_ica_ter2: string;
  extra_cupo_ter2: string;
  acue_pago_ter2: string;
  repr_ter: {
    id_repr_legal_ter: string;
    repr_legal_ter: string;
  };
  tesor_ter: {
    id_tesor_ter: string;
    tesorero_ter: string;
  };
  e_mail_rep_ter2: string;
  e_mail_tes_ter2: string;
  capitado_ter2: string;
  tipo_cupo_ter2: string;
  indicativo_ter: string;
  asesor_ter: string;
  nit1_cli_ter: string;
  ret_icav_ter: string;
  modifica_ter: {
    admi_mod_ter: string;
    fecha_mod_ter: {
      ano_mod_ter: string;
      mes_mod_ter: string;
      dia_mod_ter: string;
    };
    proceso_mod_ter: string;
    admi_cre_ter: string;
  };
  reg_web_ter: string;
  porc_estamp_ter: string;
  e_mail_ter: string;
  contact_ter: {
    descrip_cont_ter: string;
    tel_cont_ter: string;
    e_mail_cont_ter: string;
  };
  datos_hotel_ter: {
    dato_hot_ter: {
      proced_ter: string;
      destino_ter: string;
      nacional_ter: string;
      habit_ter: string;
      pasaport1_ter: string;
      pasaport2_ter: string;
    };
    datos_acomp_ter: {
      tabla_acomp_ter: [
        {
          nombre_acomp_ter: string;
          tipo_id_acomp_ter: string;
          exp_id_acomp_ter: string;
          ident_acomp_ter: string;
          nacion_acomp_ter: string;
        }
      ];
    };
  };
  datos_direcciones_ter: {
    tabla_direcciones_ter: [
      {
        direccion_ext_ter: string;
        cod_ciu_ext_ter: {
          dpto_ciu_ext_ter: string;
          ciud_ciu_ext_ter: string;
        };
        telefono_ext_ter: string;
        barrio_ter: string;
      }
    ];
  };
  nom_comer_ter: string;
  estado_ter: string;
  exiva_ter: string;
  ult_fact_ter2: {
    fecha_ufact_ter2: {
      ano_ufact_ter2: string;
      mes_ufact_ter2: string;
      dia_ufact_ter2: string;
    };
    suc_ufact_ter2: string;
    nro_ufact_ter2: string;
  };
  porc_ret_ter: string;
  vlr_base_ret_ter: string;
  cod_vtas_ter: string;
  clasificacion_ter: string;
  order_reference_ter: string;
  frecuencia_ter: string;
  orden_ruta_ter: string;
  contrato_ter: string;
}

const terce_schema = new Schema<terce>({
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
  cod_tercero: {
    cod_ter: {
        type: String,
        required: true,
    },
  },
  datos_busq_ter: {
    descrip_ter: {
      descrip1_ter: {
        ini1_ter: {
            type: String,
            required: true,
        },
        ini2_ter: {
            type: String,
            required: true,
        },
      },
      descrip2_ter: {
        type: String,
        required: true,
      },
    },
    datos_tercero: {
      direcc_ter: {
        direcc1_ter: {
            type: String,
            required: true,
        },
        direcc2_ter: {
            type: String,
            required: true,
        },
      },
      dv_ter: {
        type: String,
        required: true,
      },
      zona_ter: {
        zona1_ter: {
            type: String,
            required: true,
        },
        zona2_ter: {
            type: String,
            required: true,
        },
      },
      ruta_ter: {
        type: String,
        required: true,
      },
      orden_ter: {
        type: String,
        required: true,
      },
      bloq_ter: {
        type: String,
        required: true,
      },
      tipo_id_ter: {
        type: String,
        required: true,
      },
      grado_ter: {
        type: String,
        required: true,
      },
      calific_ter: {
        type: String,
        required: true,
      },
      reg_iva_ter: {
        type: String,
        required: true,
      },
      rut_ter: {
        type: String,
        required: true,
      },
      convenio_ter: {
        convenio1_ter: {
            type: String,
            required: true,
        },
        convenio2_ter: {
            type: String,
            required: true,
        },
      },
      plazo_ter: {
        type: String,
        required: true,
      },
      telefono_ter: {
        indica_ter: {
            type: String,
            required: true,
        },
        tele_ter: {
            type: String,
            required: true,
        },
      },
      nit_ter: {
        type: String,
        required: true,
      },
      act_ter: {
        type: String,
        required: true,
      },
      vendedor_ter: {
        type: String,
        required: true,
      },
      entidad_ter: {
        type: String,
        required: true,
      },
      retenedor_ter: {
        type: String,
        required: true,
      },
      factor_ter: {
        type: String,
        required: true,
      },
      cod_ciu_ter: {
        dpto_ciu_ter: {
            type: String,
            required: true,
        },
        ciud_ciu_ter: {
            type: String,
            required: true,
        },
      },
      pago_ter: {
        type: String,
        required: true,
      },
      exent_ret_ter: {
        type: String,
        required: true,
      },
      ret_iva_ter: {
        type: String,
        required: true,
      },
      dato_veh_ter: {
        marca_veh: {
            type: String,
            required: true,
        },
        empresa_veh: {
            type: String,
            required: true,
        },
        nro_veh: {
            type: String,
            required: true,
        },
        placa_veh: {
          placa1_veh: {
            type: String,
            required: true,
          },
          placa2_veh: {
            type: String,
            required: true,
          },
        },
        fecha_alin_veh: {
            type: String,
            required: true,
        },
        fecha_cump_veh: {
          ano_nac_ter2: {
            type: String,
            required: true,
          },
          mes_cump_veh: {
            type: String,
            required: true,
          },
          dia_cump_veh: {
            type: String,
            required: true,
          },
        },
      },
      datos_ref_ter: {
        cant_ter: {
            type: String,
            required: true,
        },
        cupo_ter: {
            type: String,
            required: true,
        },
        refer1_ter: {
          refer1a_ter: {
            type: String,
            required: true,
          },
          refer1b_ter: {
            refer1b1_ter: {
                type: String,
                required: true,
            },
            refer1b2_ter: {
                type: String,
                required: true,
            },
          },
        },
        refer2_ter: {
            type: String,
            required: true,
        },
        refer3_ter: {
            type: String,
            required: true,
        },
        cargo_ter: {
            type: String,
            required: true,
        },
        seguro_ter: {
            type: String,
            required: true,
        },
        datacre_ter: {
            type: String,
            required: true,
        },
        fecha_cre_ter: {
          ano_cre_ter: {
            type: String,
            required: true,
          },
          mes_cre_ter: {
            type: String,
            required: true,
          },
          dia_cre_ter: {
            type: String,
            required: true,
          },
        },
      },
    },
    descrip_ter2: {
      apel1_ter2: {
        type: String,
        required: true,
      },
      apel2_ter2: {
        type: String,
        required: true,
      },
      nomb1_ter2: {
        nomb1a_ter2: {
            type: String,
            required: true,
        },
        nomb1b_ter2: {
            type: String,
            required: true,
        },
      },
    },
  },
  ref1_ter2: {
    nom_ref1_ter2: {
        type: String,
        required: true,
    },
    dir_ref1_ter2: {
        type: String,
        required: true,
    },
    tel_ref1_ter2: {
        type: String,
        required: true,
    },
    rel_ref1_ter2: {
        type: String,
        required: true,
    },
  },
  ref2_ter2: {
    nom_ref2_ter2: {
        type: String,
        required: true,
    },
    dir_ref2_ter2: {
        type: String,
        required: true,
    },
    tel_ref2_ter2: {
        type: String,
        required: true,
    },
    rel_ref2_ter2: {
        type: String,
        required: true,
    },
  },
  ref3_ter2: {
    nom_ref3_ter2: {
        type: String,
        required: true,
    },
    dir_ref3_ter2: {
        type: String,
        required: true,
    },
    tel_ref3_ter2: {
        type: String,
        required: true,
    },
    rel_ref3_ter2: {
        type: String,
        required: true,
    },
  },
  trab_ter2: {
    nom_trab_ter2: {
        type: String,
        required: true,
    },
    dir_trab_ter2: {
        type: String,
        required: true,
    },
    tel_trab_ter2: {
        type: String,
        required: true,
    },
    car_trab_ter2: {
        type: String,
        required: true,
    },
    sue_trab_ter2: {
        type: String,
        required: true,
    },
    ant_trab_ter2: {
        type: String,
        required: true,
    },
  },
  ciu_exp_ter2: {
    dpto_exp_ter2: {
        type: String,
        required: true,
    },
    ciud_exp_ter2: {
        type: String,
        required: true,
    },
  },
  entid_afi_ter2: {
    type: String,
    required: true,
  },
  fecha_afi_ter2: {
    ano_afi_ter2: {
        type: String,
        required: true,
    },
    mes_afi_ter2: {
        type: String,
        required: true,
    },
    dia_afi_ter2: {
        type: String,
        required: true,
    },
  },
  e_mail_ter2: {
    type: String,
    required: true,
  },
  gran_contrib_ter: {
    type: String,
    required: true,
  },
  ret_iva_compra: {
    type: String,
    required: true,
  },
  activ_ica: {
    type: String,
    required: true,
  },
  embargos_ter2: {
    embarg1_ter2: {
        type: String,
        required: true,
    },
    embarg2_ter2: {
        type: String,
        required: true,
    },
  },
  porc_ica_ter2: {
    type: String,
    required: true,
  },
  extra_cupo_ter2: {
    type: String,
    required: true,
  },
  acue_pago_ter2: {
    type: String,
    required: true,
  },
  repr_ter: {
    id_repr_legal_ter: {
        type: String,
        required: true,
    },
    repr_legal_ter: {
        type: String,
        required: true,
    },
  },
  tesor_ter: {
    id_tesor_ter: {
        type: String,
        required: true,
    },
    tesorero_ter: {
        type: String,
        required: true,
    },
  },
  e_mail_rep_ter2: {
    type: String,
    required: true,
  },
  e_mail_tes_ter2: {
    type: String,
    required: true,
  },
  capitado_ter2: {
    type: String,
    required: true,
  },
  tipo_cupo_ter2: {
    type: String,
    required: true,
  },
  indicativo_ter: {
    type: String,
    required: true,
  },
  asesor_ter: {
    type: String,
    required: true,
  },
  nit1_cli_ter: {
    type: String,
    required: true,
  },
  ret_icav_ter: {
    type: String,
    required: true,
  },
  modifica_ter: {
    admi_mod_ter: {
        type: String,
        required: true,
    },
    fecha_mod_ter: {
      ano_mod_ter: {
        type: String,
        required: true,
      },
      mes_mod_ter: {
        type: String,
        required: true,
      },
      dia_mod_ter: {
        type: String,
        required: true,
      },
    },
    proceso_mod_ter: {
        type: String,
        required: true,
    },
    admi_cre_ter: {
        type: String,
        required: true,
    },
  },
  reg_web_ter: {
    type: String,
    required: true,
  },
  porc_estamp_ter: {
    type: String,
    required: true,
  },
  e_mail_ter: {
    type: String,
    required: true,
  },
  contact_ter: {
    descrip_cont_ter: {
        type: String,
        required: true,
    },
    tel_cont_ter: {
        type: String,
        required: true,
    },
    e_mail_cont_ter: {
        type: String,
        required: true,
    },
  },
  datos_hotel_ter: {
    dato_hot_ter: {
      proced_ter: {
        type: String,
        required: true,
      },
      destino_ter: {
        type: String,
        required: true,
      },
      nacional_ter: {
        type: String,
        required: true,
      },
      habit_ter: {
        type: String,
        required: true,
      },
      pasaport1_ter: {
        type: String,
        required: true,
      },
      pasaport2_ter: {
        type: String,
        required: true,
      },
    },
    datos_acomp_ter: {
      tabla_acomp_ter: [
        {
          nombre_acomp_ter: {
            type: String,
            required: true,
          },
          tipo_id_acomp_ter: {
            type: String,
            required: true,
          },
          exp_id_acomp_ter: {
            type: String,
            required: true,
          },
          ident_acomp_ter: {
            type: String,
            required: true,
          },
          nacion_acomp_ter: {
            type: String,
            required: true,
          },
        }
      ],
    },
  },
  datos_direcciones_ter: {
    tabla_direcciones_ter: [
      {
        direccion_ext_ter: {
            type: String,
            required: true,
        },
        cod_ciu_ext_ter: {
          dpto_ciu_ext_ter: {
            type: String,
            required: true,
          },
          ciud_ciu_ext_ter: {
            type: String,
            required: true,
          },
        },
        telefono_ext_ter: {
            type: String,
            required: true,
        },
        barrio_ter: {
            type: String,
            required: true,
        },
      }
    ],
  },
  nom_comer_ter: {
    type: String,
    required: true,
  },
  estado_ter: {
    type: String,
    required: true,
  },
  exiva_ter: {
    type: String,
    required: true,
  },
  ult_fact_ter2: {
    fecha_ufact_ter2: {
      ano_ufact_ter2: {
        type: String,
        required: true,
      },
      mes_ufact_ter2: {
        type: String,
        required: true,
      },
      dia_ufact_ter2: {
        type: String,
        required: true,
      },
    },
    suc_ufact_ter2: {
        type: String,
        required: true,
    },
    nro_ufact_ter2: {
        type: String,
        required: true,
    },
  },
  porc_ret_ter: {
    type: String,
    required: true,
  },
  vlr_base_ret_ter: {
    type: String,
    required: true,
  },
  cod_vtas_ter: {
    type: String,
    required: true,
  },
  clasificacion_ter: {
    type: String,
    required: true,
  },
  order_reference_ter: {
    type: String,
    required: true,
  },
  frecuencia_ter: {
    type: String,
    required: true,
  },
  orden_ruta_ter: {
    type: String,
    required: true,
  },
  contrato_ter: {
    type: String,
    required: true,
  },
});