import { PedidoDevolucaoEstado } from "../interfaces/pedido-devolucao-estado";
import { PedidoDevolucao } from "../pedido-devolucao";
import { DevolucaoConcluida } from "./devolucao-concluida";

export class DevolucaoEmTransito implements PedidoDevolucaoEstado {
  nome: String = "Em trânsito";
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
    console.log("Não é possível aceitar devolução pois o pedido já está em trânsito.");
  }

  rejeitarDevolucao(): void {
    console.log("Não é possível rejeitar devolução pois o pedido já está em trânsito.");
  }

  enviarParaAnalise(): void {
    console.log("Não é possível enviar para análise pois o pedido já está em trânsito.");
  }

  enviarParaTransito(): void {
    console.log("A devolução já está em trânsito.");
  }

  finalizarDevolucao(): void {
    console.log("Pedido de devolução finalizado!")
    this.pedido.setState(new DevolucaoConcluida(this.pedido));
  }
}
