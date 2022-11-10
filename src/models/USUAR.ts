import mongoose, { Schema, model } from "mongoose";

mongoose.pluralize(null);

interface usuar {
  ubicacion: string;
  direct: string;
  subdirect: string;
  nombre_usu: {
    nombre1_usu: {
      nom1_usu: string;
      nom2_usu: string;
    };
    nombre2_usu: {
      nom3_usu: string;
    };
  };
  nit_usu: string;
  dv_usu: string;
  direcc_usu: {
    direcc1_usu: string;
    direcc2_usu: string;
  };
  cod_ciu_usu: {
    dpt_ciu_usu: string;
    ciu_ciu_usu: string;
  };
  tel_usu: string;
  nuir_usu: string;
  prefijo_usu: string;
  lista_pol_usu: string;
  iva_s_usu: string;
  nombre_alterno: {
    nombre1_alterno: string;
    nombre2_alterno: string;
  };
  nit_alt: string;
  dv_alt: string;
  direcc_alt: {
    direcc1_alt: string;
    direcc2_alt: string;
  };
  cod_ciu_alt: string;
  tel_alt: string;
  prefijo_alt: string;
  lista_pol_alt: string;
  iva_s_alt: string;
  limi_costo_usu: string;
  exten_fac_usu: string;
  cta_efect_usu: string;
  retail_usu: string;
  aprox_usu: string;
  repetido_usu: string;
  descto_usu: string;
  retenedor_usu: string;
  contado_usu: string;
  presup_usu: string;
  ctl_cheq_usu: string;
  dep_inven_usu: string;
  formato_rbo_usu: string;
  separa_caja_alt: string;
  limit_venta_usu: string;
  cuadre_usu: string;
  costo_usu: string;
  ctl_usu: string;
  invent_usu: string;
  cartera_usu: string;
  tipo_cod_usu: string;
  copia_usu: string;
  puc_usu: string;
  directorio_usu: string;
  archmae_usu: string;
  archter_usu: {
    nom1_archter_usu: string;
    nom2_archter_usu: string;
  };
  barras_usu: string;
  pos_usu: string;
  asume_iva_usu: string;
  asume_vlr_usu: string;
  iva_usu: string;
  iva_2_usu: string;
  iva_3_usu: string;
  autoret_usu: string;
  resol_dian_usu: {
    resol1_usu: string;
    resol2_usu: string;
  };
  clave_usu: string;
  clave_nit_usu: string;
  clave_inv_usu: string;
  clave_men_usu: string;
  clave_con_usu: string;
  clave_car_usu: string;
  clave_otr_usu: string;
  clave_men_inv: string;
  clave_2_usu: string;
  barras_fact_usu: string;
  activ_usu: string;
  clave_correc_usu: string;
  ret_fact_usu: string;
  porc_cree_usu: string;
  nom_egreso_usu: string;
  formato_egr_usu: string;
  f_liq_base_fact_usu: string;
  despacho_usu: string;
  niif_usu: string;
  costo_art_usu: string;
  mult_rubro_usu: string;
  dir_dian_usu: string;
  fact_inf_costo_usu: string;
  deprec_dif_niif_usu: string;
  alerta_transp_usu: string;
  per_ini_niif_usu: {
    ano_ini_niif_usu: string;
    mes_ini_niif_usu: string;
  };
  sal_min_usu: string;
  mens_menu_usu: {
    mens1_menu_usu: string;
    mens2_menu_usu: string;
  };
  ley1429_usu: string;
  menu_suc_usu: string;
  sup_deventa_usu: string;
  lote_farm_usu: string;
  tip_caj_usu: string;
  nota_entrega_usu: string;
  placa_usu: string;
  cuotas_usu: string;
  restric_ex_usu: string;
  max_mora_usu: string;
  contab_pos_usu: string;
  reteiva_usu: string;
  pedido_usu: string;
  autocree_usu: string;
  dir_inv_usu: string;
  tipo_empr_usu: string;
  e_mail_usu: string;
  serv_email_usu: string;
  clave_email_usu: string;
  ssl_email_usu: string;
  item_max_usu: string;
  imp_fact_usu: string;
  imp_cot_usu: string;
  imp_ord_usu: string;
  lista_precio_usu: string;
  email_fact_usu: string;
  serv_email_fact_usu: string;
  clave_email_fact_usu: string;
  ssl_email_fact_usu: string;
  email_nom_usu: string;
  serv_email_nom_usu: string;
  clave_email_nom_usu: string;
  ssl_email_nom_usu: string;
  costo_deud_usu: string;
  ruta_estampilla_usu: string;
  autorteica_usu: string;
  ret_cree_usu: string;
  conv_iyc_anual_usu: string;
  conv_iyc_bimes_usu: string;
  directorio_ant_usu: string;
  acta_remi_usu: string;
  clave_iyc_usu: string;
  precio_suc_usu: string;
  ip_local_usu: string;
  ip_publica_usu: string;
  usuario_sql_usu: string;
  clave_sql_usu: string;
  ley1943_usu: string;
  control_formu_usu: string;
  amp_deta_usu: string;
  cta_tdebito_usu: string;
  cta_tcredito_usu: string;
  cta_cheque_usu: string;
  fac_pedi_usu: string;
  fac_coti_usu: string;
  fac_remi_usu: string;
  fac_alis_usu: string;
  terce_ventana_usu: string;
  alerta_cumple_usu: string;
  tiquete_regalo_usu: string;
  contab_dcto_usu: string;
}

const usuar_schema = new Schema<usuar>({
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
  nombre_usu: {
    nombre1_usu: {
      nom1_usu: {
        type: String,
        required: true,
      },
      nom2_usu: {
        type: String,
        required: true,
      },
    },
    nombre2_usu: {
      nom3_usu: {
        type: String,
        required: true,
      },
    },
  },
  nit_usu: {
    type: String,
    required: true,
  },
  dv_usu: {
    type: String,
    required: true,
  },
  direcc_usu: {
    direcc1_usu: {
        type: String,
        required: true,
    },
    direcc2_usu: {
        type: String,
        required: true,
    },
  },
  cod_ciu_usu: {
    dpt_ciu_usu: {
        type: String,
        required: true,
    },
    ciu_ciu_usu: {
        type: String,
        required: true,
    },
  },
  tel_usu: {
    type: String,
    required: true,
  },
  nuir_usu: {
    type: String,
    required: true,
  },
  prefijo_usu: {
    type: String,
    required: true,
  },
  lista_pol_usu: {
    type: String,
    required: true,
  },
  iva_s_usu: {
    type: String,
    required: true,
  },
  nombre_alterno: {
    nombre1_alterno: {
        type: String,
        required: true,
    },
    nombre2_alterno: {
        type: String,
        required: true,
    },
  },
  nit_alt: {
    type: String,
    required: true,
  },
  dv_alt: {
    type: String,
    required: true,
  },
  direcc_alt: {
    direcc1_alt: {
        type: String,
        required: true,
    },
    direcc2_alt: {
        type: String,
        required: true,
    },
  },
  cod_ciu_alt: {
    type: String,
    required: true,
  },
  tel_alt: {
    type: String,
    required: true,
  },
  prefijo_alt: {
    type: String,
    required: true,
  },
  lista_pol_alt: {
    type: String,
    required: true,
  },
  iva_s_alt: {
    type: String,
    required: true,
  },
  limi_costo_usu: {
    type: String,
    required: true,
  },
  exten_fac_usu: {
    type: String,
    required: true,
  },
  cta_efect_usu: {
    type: String,
    required: true,
  },
  retail_usu: {
    type: String,
    required: true,
  },
  aprox_usu: {
    type: String,
    required: true,
  },
  repetido_usu: {
    type: String,
    required: true,
  },
  descto_usu: {
    type: String,
    required: true,
  },
  retenedor_usu: {
    type: String,
    required: true,
  },
  contado_usu: {
    type: String,
    required: true,
  },
  presup_usu: {
    type: String,
    required: true,
  },
  ctl_cheq_usu: {
    type: String,
    required: true,
  },
  dep_inven_usu: {
    type: String,
    required: true,
  },
  formato_rbo_usu: {
    type: String,
    required: true,
  },
  separa_caja_alt: {
    type: String,
    required: true,
  },
  limit_venta_usu: {
    type: String,
    required: true,
  },
  cuadre_usu: {
    type: String,
    required: true,
  },
  costo_usu: {
    type: String,
    required: true,
  },
  ctl_usu: {
    type: String,
    required: true,
  },
  invent_usu: {
    type: String,
    required: true,
  },
  cartera_usu: {
    type: String,
    required: true,
  },
  tipo_cod_usu: {
    type: String,
    required: true,
  },
  copia_usu: {
    type: String,
    required: true,
  },
  puc_usu: {
    type: String,
    required: true,
  },
  directorio_usu: {
    type: String,
    required: true,
  },
  archmae_usu: {
    type: String,
    required: true,
  },
  archter_usu: {
    nom1_archter_usu: {
        type: String,
        required: true,
    },
    nom2_archter_usu: {
        type: String,
        required: true,
    },
  },
  barras_usu: {
    type: String,
    required: true,
  },
  pos_usu: {
    type: String,
    required: true,
  },
  asume_iva_usu: {
    type: String,
    required: true,
  },
  asume_vlr_usu: {
    type: String,
    required: true,
  },
  iva_usu: {
    type: String,
    required: true,
  },
  iva_2_usu: {
    type: String,
    required: true,
  },
  iva_3_usu: {
    type: String,
    required: true,
  },
  autoret_usu: {
    type: String,
    required: true,
  },
  resol_dian_usu: {
    resol1_usu: {
        type: String,
        required: true,
    },
    resol2_usu: {
        type: String,
        required: true,
    },
  },
  clave_usu: {
    type: String,
    required: true,
  },
  clave_nit_usu: {
    type: String,
    required: true,
  },
  clave_inv_usu: {
    type: String,
    required: true,
  },
  clave_men_usu: {
    type: String,
    required: true,
  },
  clave_con_usu: {
    type: String,
    required: true,
  },
  clave_car_usu: {
    type: String,
    required: true,
  },
  clave_otr_usu: {
    type: String,
    required: true,
  },
  clave_men_inv: {
    type: String,
    required: true,
  },
  clave_2_usu: {
    type: String,
    required: true,
  },
  barras_fact_usu: {
    type: String,
    required: true,
  },
  activ_usu: {
    type: String,
    required: true,
  },
  clave_correc_usu: {
    type: String,
    required: true,
  },
  ret_fact_usu: {
    type: String,
    required: true,
  },
  porc_cree_usu: {
    type: String,
    required: true,
  },
  nom_egreso_usu: {
    type: String,
    required: true,
  },
  formato_egr_usu: {
    type: String,
    required: true,
  },
  f_liq_base_fact_usu: {
    type: String,
    required: true,
  },
  despacho_usu: {
    type: String,
    required: true,
  },
  niif_usu: {
    type: String,
    required: true,
  },
  costo_art_usu: {
    type: String,
    required: true,
  },
  mult_rubro_usu: {
    type: String,
    required: true,
  },
  dir_dian_usu: {
    type: String,
    required: true,
  },
  fact_inf_costo_usu: {
    type: String,
    required: true,
  },
  deprec_dif_niif_usu: {
    type: String,
    required: true,
  },
  alerta_transp_usu: {
    type: String,
    required: true,
  },
  per_ini_niif_usu: {
    ano_ini_niif_usu: {
        type: String,
        required: true,
    },
    mes_ini_niif_usu: {
        type: String,
        required: true,
    },
  },
  sal_min_usu: {
    type: String,
    required: true,
  },
  mens_menu_usu: {
    mens1_menu_usu: {
        type: String,
        required: true,
    },
    mens2_menu_usu: {
        type: String,
        required: true,
    },
  },
  ley1429_usu: {
    type: String,
    required: true,
  },
  menu_suc_usu: {
    type: String,
    required: true,
  },
  sup_deventa_usu: {
    type: String,
    required: true,
  },
  lote_farm_usu: {
    type: String,
    required: true,
  },
  tip_caj_usu: {
    type: String,
    required: true,
  },
  nota_entrega_usu: {
    type: String,
    required: true,
  },
  placa_usu: {
    type: String,
    required: true,
  },
  cuotas_usu: {
    type: String,
    required: true,
  },
  restric_ex_usu: {
    type: String,
    required: true,
  },
  max_mora_usu: {
    type: String,
    required: true,
  },
  contab_pos_usu: {
    type: String,
    required: true,
  },
  reteiva_usu: {
    type: String,
    required: true,
  },
  pedido_usu: {
    type: String,
    required: true,
  },
  autocree_usu: {
    type: String,
    required: true,
  },
  dir_inv_usu: {
    type: String,
    required: true,
  },
  tipo_empr_usu: {
    type: String,
    required: true,
  },
  e_mail_usu: {
    type: String,
    required: true,
  },
  serv_email_usu: {
    type: String,
    required: true,
  },
  clave_email_usu: {
    type: String,
    required: true,
  },
  ssl_email_usu: {
    type: String,
    required: true,
  },
  item_max_usu: {
    type: String,
    required: true,
  },
  imp_fact_usu: {
    type: String,
    required: true,
  },
  imp_cot_usu: {
    type: String,
    required: true,
  },
  imp_ord_usu: {
    type: String,
    required: true,
  },
  lista_precio_usu: {
    type: String,
    required: true,
  },
  email_fact_usu: {
    type: String,
    required: true,
  },
  serv_email_fact_usu: {
    type: String,
    required: true,
  },
  clave_email_fact_usu: {
    type: String,
    required: true,
  },
  ssl_email_fact_usu: {
    type: String,
    required: true,
  },
  email_nom_usu: {
    type: String,
    required: true,
  },
  serv_email_nom_usu: {
    type: String,
    required: true,
  },
  clave_email_nom_usu: {
    type: String,
    required: true,
  },
  ssl_email_nom_usu: {
    type: String,
    required: true,
  },
  costo_deud_usu: {
    type: String,
    required: true,
  },
  ruta_estampilla_usu: {
    type: String,
    required: true,
  },
  autorteica_usu: {
    type: String,
    required: true,
  },
  ret_cree_usu: {
    type: String,
    required: true,
  },
  conv_iyc_anual_usu: {
    type: String,
    required: true,
  },
  conv_iyc_bimes_usu: {
    type: String,
    required: true,
  },
  directorio_ant_usu: {
    type: String,
    required: true,
  },
  acta_remi_usu: {
    type: String,
    required: true,
  },
  clave_iyc_usu: {
    type: String,
    required: true,
  },
  precio_suc_usu: {
    type: String,
    required: true,
  },
  ip_local_usu: {
    type: String,
    required: true,
  },
  ip_publica_usu: {
    type: String,
    required: true,
  },
  usuario_sql_usu: {
    type: String,
    required: true,
  },
  clave_sql_usu: {
    type: String,
    required: true,
  },
  ley1943_usu: {
    type: String,
    required: true,
  },
  control_formu_usu: {
    type: String,
    required: true,
  },
  amp_deta_usu: {
    type: String,
    required: true,
  },
  cta_tdebito_usu: {
    type: String,
    required: true,
  },
  cta_tcredito_usu: {
    type: String,
    required: true,
  },
  cta_cheque_usu: {
    type: String,
    required: true,
  },
  fac_pedi_usu: {
    type: String,
    required: true,
  },
  fac_coti_usu: {
    type: String,
    required: true,
  },
  fac_remi_usu: {
    type: String,
    required: true,
  },
  fac_alis_usu: {
    type: String,
    required: true,
  },
  terce_ventana_usu: {
    type: String,
    required: true,
  },
  alerta_cumple_usu: {
    type: String,
    required: true,
  },
  tiquete_regalo_usu: {
    type: String,
    required: true,
  },
  contab_dcto_usu: {
    type: String,
    required: true,
  },
});

usuar_schema.index({ llave: 1 }, { unique: true });

export const usuar_model = model<usuar>("usuar", usuar_schema);