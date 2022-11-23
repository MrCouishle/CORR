import mongoose, { Schema, model } from "mongoose";

mongoose.pluralize(null);

interface terce {
  ubicacion: string;
  direct: string;
  subdirect: string;
  codigo: number;
  descrip: string;
  direcc: string;
  dv: string;
  zona: string;
  ruta: string;
  orden: number;
  bloq: string;
  tipo: string;
  grado: string;
  calific: string;
  regIva: string;
  rut: string;
  convenio: string;
  plazo: number;
  telefono: string;
  nit: number;
  act: number;
  vendedor: string;
  entidad: string;
  retenedor: string;
  factor: number;
  codCiu: number;
  pago: number;
  exent: string;
  retIva: string;
  marcaVeh: string;
  empresaVeh: string;
  nroVeh: string;
  placaVeh: string;
  fechaAlinVeh: string;
  fechaNac: string;
  cant: number;
  cupo: number;
  refer1: string;
  refer2: string;
  refer3: string;
  cargo: string;
  seguro: string;
  datacre: string;
  fechaCre: string;
  apel1: string;
  apel2: string;
  nomb1a: string;
  nomb1b: string;
  nomRef1: string;
  dirRef1: string;
  telRef1: string;
  relRef1: string;
  nomRef2: string;
  dirRef2: string;
  telRef2: string;
  relRef2: string;
  nomRef3: string;
  dirRef3: string;
  telRef3: string;
  relRef3: string;
  nomTrab: string;
  dirTrab: string;
  telTrab: string;
  carTrab: string;
  sueTrab: number;
  antTrab: string;
  ciuExp: number;
  entidAfi: number;
  fechaAfi: string;
  emailTer2: string;
  granContrib: string;
  retIvaCompra: string;
  activIca: number;
  embargos: string;
  porcIca: number;
  extraCupo: number;
  acuePago: string;
  idReprLegal: number;
  reprLegal: string;
  idTesor: number;
  tesorero: string;
  emailRep: string;
  emailtes: string;
  capitado: string;
  tipoCupo: number;
  indicativo: string;
  asesor: string;
  nit1Cli: string;
  retIcav: string;
  adminMod: string;
  fechaMod: string;
  procesoMod: string;
  admiCre: string;
  regWeb: number;
  porcEstamp: number;
  email: string;
  descripCont: string;
  telCont: string;
  emailCont: string;
  proced: string;
  destino: string;
  nacional: string;
  habit: number;
  pasaport1: string;
  pasaport2: string;
  tablaAcomp: [
    {
      nombreAcomp: string;
      tipoIdAcomp: number;
      expIdAcomp: string;
      identAcomp: number;
      nacionAcomp: string;
    }
  ];
  tablaDirecciones: [
    {
      direccionExt: string;
      codCiuExt: number;
      telefonoExt: number;
      barrio: number;
    }
  ];
  nomComer: string;
  estado: number;
  exiva: string;
  fechaVfact: string;
  sucUfact: number;
  nroUfact: number;
  porcRet: number;
  vlrBaseRet: number;
  codVtas: number;
  clasificacion: string;
  orderReference: string;
  frecuencia: string;
  ordenRuta: number;
  contrato: string;
  activida: string;
  autorizacion: string;
}

const terce_schema = new Schema<terce>({
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
  },
  descrip: {
    type: String,
    default: "",
    required: true,
  },
  direcc: {
    type: String,
    default: "",
    required: true,
  },
  dv: {
    type: String,
    default: "",
    required: true,
  },
  zona: {
    type: String,
    default: "",
    required: true,
  },
  ruta: {
    type: String,
    default: "",
    required: true,
  },
  orden: {
    type: Number,
    default: 0,
    required: true,
  },
  bloq: {
    type: String,
    default: "",
    required: true,
  },
  tipo: {
    type: String,
    default: "",
    required: true,
  },
  grado: {
    type: String,
    default: "",
    required: true,
  },
  calific: {
    type: String,
    default: "",
    required: true,
  },
  regIva: {
    type: String,
    default: "",
    required: true,
  },
  rut: {
    type: String,
    default: "",
    required: true,
  },
  convenio: {
    type: String,
    default: "",
    required: true,
  },
  plazo: {
    type: Number,
    default: 0,
    required: true,
  },
  telefono: {
    type: String,
    default: "",
    required: true,
  },
  nit: {
    type: Number,
    default: 0,
    required: true,
  },
  act: {
    type: Number,
    default: 0,
    required: true,
  },
  vendedor: {
    type: String,
    default: "",
    required: true,
  },
  entidad: {
    type: String,
    default: "",
    required: true,
  },
  retenedor: {
    type: String,
    default: "",
    required: true,
  },
  factor: {
    type: Number,
    default: 0,
    required: true,
  },
  codCiu: {
    type: Number,
    default: 0,
    required: true,
  },
  pago: {
    type: Number,
    default: 0,
    required: true,
  },
  exent: {
    type: String,
    default: "",
    required: true,
  },
  retIva: {
    type: String,
    default: "",
    required: true,
  },
  marcaVeh: {
    type: String,
    default: "",
    required: true,
  },
  empresaVeh: {
    type: String,
    default: "",
    required: true,
  },
  nroVeh: {
    type: String,
    default: "",
    required: true,
  },
  placaVeh: {
    type: String,
    default: "",
    required: true,
  },
  fechaAlinVeh: {
    type: String,
    default: "",
    required: true,
  },
  fechaNac: {
    type: String,
    default: "",
    required: true,
  },
  cant: {
    type: Number,
    default: 0,
    required: true,
  },
  cupo: {
    type: Number,
    default: 0,
    required: true,
  },
  refer1: {
    type: String,
    default: "",
    required: true,
  },
  refer2: {
    type: String,
    default: "",
  },
  refer3: {
    type: String,
    default: "",
  },
  cargo: {
    type: String,
    default: "",
    required: true,
  },
  seguro: {
    type: String,
    default: "",
    required: true,
  },
  datacre: {
    type: String,
    default: "",
    required: true,
  },
  fechaCre: {
    type: String,
    default: "",
    required: true,
  },
  apel1: {
    type: String,
    default: "",
    required: true,
  },
  apel2: {
    type: String,
    default: "",
  },
  nomb1a: {
    type: String,
    default: "",
    required: true,
  },
  nomb1b: {
    type: String,
    default: "",
    required: true,
  },
  nomRef1: {
    type: String,
    default: "",
    required: true,
  },
  dirRef1: {
    type: String,
    default: "",
    required: true,
  },
  telRef1: {
    type: String,
    default: "",
    required: true,
  },
  relRef1: {
    type: String,
    default: "",
    required: true,
  },
  nomRef2: {
    type: String,
    default: "",
    required: true,
  },
  dirRef2: {
    type: String,
    default: "",
    required: true,
  },
  telRef2: {
    type: String,
    default: "",
    required: true,
  },
  relRef2: {
    type: String,
    default: "",
    required: true,
  },
  nomRef3: {
    type: String,
    default: "",
    required: true,
  },
  dirRef3: {
    type: String,
    default: "",
    required: true,
  },
  telRef3: {
    type: String,
    default: "",
    required: true,
  },
  relRef3: {
    type: String,
    default: "",
    required: true,
  },
  nomTrab: {
    type: String,
    default: "",
    required: true,
  },
  dirTrab: {
    type: String,
    default: "",
    required: true,
  },
  telTrab: {
    type: String,
    default: "",
    required: true,
  },
  carTrab: {
    type: String,
    default: "",
    required: true,
  },
  sueTrab: {
    type: Number,
    default: 0,
  },
  antTrab: {
    type: String,
    default: "",
    required: true,
  },
  ciuExp: {
    type: Number,
    default: 0,
  },
  entidAfi: {
    type: Number,
    default: 0,
  },
  fechaAfi: {
    type: String,
    default: "",
    required: true,
  },
  emailTer2: {
    type: String,
    default: "",
    required: true,
  },
  granContrib: {
    type: String,
    default: "",
    required: true,
  },
  retIvaCompra: {
    type: String,
    default: "",
    required: true,
  },
  activIca: {
    type: Number,
    default: 0,
  },
  embargos: {
    type: String,
    default: "",
    required: true,
  },
  porcIca: {
    type: Number,
    default: 0,
  },
  extraCupo: {
    type: Number,
    default: 0,
  },
  acuePago: {
    type: String,
    default: "",
    required: true,
  },
  idReprLegal: {
    type: Number,
    default: 0,
  },
  reprLegal: {
    type: String,
    default: "",
    required: true,
  },
  idTesor: {
    type: Number,
    default: 0,
  },
  tesorero: {
    type: String,
    default: "",
    required: true,
  },
  emailRep: {
    type: String,
    default: "",
    required: true,
  },
  emailtes: {
    type: String,
    default: "",
    required: true,
  },
  capitado: {
    type: String,
    default: "",
    required: true,
  },
  tipoCupo: {
    type: Number,
    default: 0,
  },
  indicativo: {
    type: String,
    default: "",
    required: true,
  },
  asesor: {
    type: String,
    default: "",
    required: true,
  },
  nit1Cli: {
    type: String,
    default: "",
    required: true,
  },
  retIcav: {
    type: String,
    default: "",
    required: true,
  },
  adminMod: {
    type: String,
    default: "",
    required: true,
  },
  fechaMod: {
    type: String,
    default: "",
    required: true,
  },
  procesoMod: {
    type: String,
    default: "",
    required: true,
  },
  admiCre: {
    type: String,
    default: "",
    required: true,
  },
  regWeb: {
    type: Number,
    default: 0,
  },
  porcEstamp: {
    type: Number,
    default: 0,
  },
  email: {
    type: String,
    default: "",
    required: true,
  },
  descripCont: {
    type: String,
    default: "",
    required: true,
  },
  telCont: {
    type: String,
    default: "",
    required: true,
  },
  emailCont: {
    type: String,
    default: "",
    required: true,
  },
  proced: {
    type: String,
    default: "",
    required: true,
  },
  destino: {
    type: String,
    default: "",
    required: true,
  },
  nacional: {
    type: String,
    default: "",
    required: true,
  },
  habit: {
    type: Number,
    default: 0,
  },
  pasaport1: {
    type: String,
    default: "",
    required: true,
  },
  pasaport2: {
    type: String,
    default: "",
    required: true,
  },
  tablaAcomp: [
    {
      nombreAcomp: {
        type: String,
        default: "",
      },
      tipoIdAcomp: {
        type: Number,
        default: 0,
      },
      expIdAcomp: {
        type: String,
        default: "",
      },
      identAcomp: {
        type: Number,
        default: 0,
      },
      nacionAcomp: {
        type: String,
        default: "",
      },
    },
  ],
  tablaDirecciones: [
    {
      direccionExt: {
        type: String,
        default: "",
      },
      codCiuExt: {
        type: Number,
        default: 0,
      },
      telefonoExt: {
        type: Number,
        default: 0,
      },
      barrio: {
        type: Number,
        default: 0,
      },
    },
  ],
  nomComer: {
    type: String,
    default: "",
  },
  estado: {
    type: Number,
    default: 0,
  },
  exiva: {
    type: String,
    default: "",
  },
  fechaVfact: {
    type: String,
    default: "",
  },
  sucUfact: {
    type: Number,
    default: 0,
  },
  nroUfact: {
    type: Number,
    default: 0,
  },
  porcRet: {
    type: Number,
    default: 0,
  },
  vlrBaseRet: {
    type: Number,
    default: 0,
  },
  codVtas: {
    type: Number,
    default: 0,
  },
  clasificacion: {
    type: String,
    default: "",
  },
  orderReference: {
    type: String,
    default: "",
  },
  frecuencia: {
    type: String,
    default: "",
  },
  ordenRuta: {
    type: Number,
    default: 0,
  },
  contrato: {
    type: String,
    default: "",
  },
  activida: {
    type: String,
    default: "",
  },
  autorizacion: {
    type: String,
    default: "",
  },
});

terce_schema.index({codigo:1},{unique:true})

export const terce_model = model<terce>("terce", terce_schema)
