import { Observer } from './Observer.interface';

export interface Observable {
    inscrever(observador: Observer): void;
    desinscrever(observador: Observer): void;
    notificar(): void;
}