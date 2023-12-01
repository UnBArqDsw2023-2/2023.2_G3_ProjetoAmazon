import { Transportadora } from "./Transportadora";

export interface Observer {
    atualizar(transportadora: Transportadora): void;
}