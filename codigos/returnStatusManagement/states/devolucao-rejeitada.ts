import { PedidoDevolucaoEstado } from "../interfaces/pedido-devolucao-estado";
import { PedidoDevolucao } from "../pedido-devolucao";

export class DevolucaoRejeitada implements PedidoDevolucaoEstado {
  nome: String = "Rejeitado";
  data: Date;
  pedido: PedidoDevolucao;

  constructor(pedido: PedidoDevolucao) {
    this.pedido = pedido;
    this.data = new Date();
  }

  getNome(): String {
    return this.nome;
  }

  getData(): Date {
    return this.data;
  }

  aceitarDevolucao(): void {
    console.log("A devolução não pode ser aprovada pois já foi rejeitada.");
  }

  rejeitarDevolucao(): void {
    console.log("O pedido de devolução já está rejeitado.");
  }

  enviarParaAnalise(): void {
    console.log("O pedido já foi analisado.");
  }

  enviarParaTransito(): void {
    console.log("Não é possível enviar um pedido rejeitado para trânsito.");
  }

  finalizarDevolucao(): void {
    console.log("Não é possível finalizar uma devolução rejeitada.");
  }
}
