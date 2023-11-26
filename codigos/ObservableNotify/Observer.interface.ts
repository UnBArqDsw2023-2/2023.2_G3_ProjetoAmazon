import { Transportadora } from "./Transportadora";

export interface Observer {
    update(transportadora: Transportadora): void;
}