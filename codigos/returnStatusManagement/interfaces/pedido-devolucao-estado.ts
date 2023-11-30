export interface PedidoDevolucaoEstado {
    nome: String;
    data: Date;
    getNome(): String;
    getData(): Date;
    aceitarDevolucao(): void;
    rejeitarDevolucao(): void;
    enviarParaAnalise(): void;
    enviarParaTransito(): void;
    finalizarDevolucao(): void;
}