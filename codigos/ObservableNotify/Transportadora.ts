import { Observable } from './Observable.interface';
import { Observer } from './Observer.interface';

export class Transportadora implements Observable {
    private observers: Observer[] = [];
    private status: string = '';

    subscribe(observer: Observer): void {
        const isExist = this.observers.includes(observer);
        if (isExist) {
            return console.log('Observer já inscrito.');
        }

        this.observers.push(observer);
    }

    unsubscribe(observer: Observer): void {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex !== -1) {
            this.observers.splice(observerIndex, 1);
        }
    }

    notifyObservers(): void {
        for (const observer of this.observers) {
            observer.update(this);
        }
    }

    setStatus(status: string): void {
        this.status = status;
        this.notifyObservers();
    }

    getStatus(): string {
        return this.status;
    }
}