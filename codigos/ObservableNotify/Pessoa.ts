export class Pessoa {
    protected nomeCompleto: string;
    protected cpf: BigInt;
    protected email: string;
    protected dataNascimento: string;
    protected estado: string;
    protected cidade: string;
    protected bairro: string;
    protected rua: string;
    protected numero: number;
    protected cep: BigInt;


    constructor(
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
        this.nomeCompleto = nomeCompleto;
        this.cpf = cpf;
        this.email = email;
        this.dataNascimento = dataNascimento;
        this.estado = estado;
        this.cidade = cidade;
        this.bairro = bairro;
        this.rua = rua;
        this.numero = numero;
        this.cep = cep;
    }
}