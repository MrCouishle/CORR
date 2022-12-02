import { route_con802 } from "./CON802";
import {route_serco} from "./COR101";
import {route_depco} from "./COR102";
import {route_tipco} from "./COR103";
import {route_auxtip} from "./COR104";
import {route_unifun} from "./COR105";
import {route_remidep} from "./COR106";
import {route_holding} from "./COR107";
import {route_cargops} from "./COR108";
import {route_corres} from "./COR201";
import {route_informeCorres} from "./COR301";
import { route_listadoRespuesta } from "./COR304";
import {route_macorr} from "./COR402";
import {route_usuvue} from "./USUVUE";
import { router_favoritos } from "./FAVORITOS";
import { router_config } from "./CONFIG";
import { router_modulos } from "./MODULOS";
// import {route_activ} from "./";
// import {route_ciuda} from "./";
// import {route_corres} from "./";
// import {route_rescorr} from "./";
// import {route_terce} from "./";
// import {route_usuar} from "./";
import { RouteEntry } from "./route.entry";//EXAMPLE

export const SERCO = route_serco;
export const DEPCO = route_depco;
export const TIPCO = route_tipco;
export const AUXTIP = route_auxtip;
export const UNIFUN = route_unifun;
export const REMIDEP = route_remidep;
export const HOLDING = route_holding;
export const CARGOPS = route_cargops;
export const CORRES = route_corres;
export const CON802 = route_con802;
export const CORRESINFOR = route_informeCorres;
export const LISTADORESCORR = route_listadoRespuesta;
export const MACORR = route_macorr;
export const USUVUE = route_usuvue;
export const FAVORITOS = router_favoritos
export const CONFIG = router_config
export const MODULOS = router_modulos
// export const ACTIV = route_activ;
// export const CIUDA = route_ciuda;
// export const CORRES = route_corres;
// export const RESCORR = route_rescorr;
// export const TERCE = route_terce;
// export const USUAR = route_usuar;
export const Entrys = RouteEntry;//EXAMPLE
