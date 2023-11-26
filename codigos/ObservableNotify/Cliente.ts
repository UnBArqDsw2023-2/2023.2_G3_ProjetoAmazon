import { Observer } from './Observer.interface';
import { Transportadora } from './Transportadora';
import { Pessoa } from './Pessoa';

export class Cliente extends Pessoa implements Observer {
    private idCliente: number;

    constructor(
        idCliente: number,
        nomeCompleto: string,
        cpf: BigInt,
        email: string,
        dataNascimento: string,
        estado: string,
        cidade: string,
        bairro: string,
        rua: string,
        numero: number,
        cep: BigInt
    ) {
        super(nomeCompleto, cpf, email, dataNascimento, estado, cidade, bairro, rua, numero, cep);
        this.idCliente = idCliente;
    }

    atualizar(transportadora: Transportadora): void {
        console.log(`Cliente ${this.nomeCompleto}, nova atualização de status: ${transportadora.getStatus()}`);
    }
}
