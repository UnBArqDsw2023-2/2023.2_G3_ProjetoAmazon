import { Observable } from './Observable.interface';
import { Observer } from './Observer.interface';

export class Transportadora implements Observable {
    private observadores: Observer[] = [];
    private status: string = '';

    inscrever(observadores: Observer): void {
        const isExist = this.observadores.includes(observadores);
        if (isExist) {
            return console.log('Observer já inscrito.');
        }

        this.observadores.push(observadores);
    }

    desinscrever(observadores: Observer): void {
        const observerIndex = this.observadores.indexOf(observadores);
        if (observerIndex !== -1) {
            this.observadores.splice(observerIndex, 1);
        }
    }

    notificar(): void {
        for (const observer of this.observadores) {
            observer.atualizar(this);
        }
    }

    setStatus(status: string): void {
        this.status = status;
        this.notificar();
    }

    getStatus(): string {
        return this.status;
    }
}