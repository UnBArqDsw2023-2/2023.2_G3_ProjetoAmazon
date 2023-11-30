import { PedidoDevolucaoEstado } from "../interfaces/pedido-devolucao-estado";
import { PedidoDevolucao } from "../pedido-devolucao";
import { DevolucaoAprovada } from "./devolucao-aprovada";
import { DevolucaoRejeitada } from "./devolucao-rejeitada";

export class DevolucaoEmAnalise implements PedidoDevolucaoEstado {
  nome: String = "Em análise";
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
    console.log("Pedido de devolução aceito!");
    this.pedido.setState(new DevolucaoAprovada(this.pedido));
  }

  rejeitarDevolucao(): void {
    console.log("Devolução rejeitada!");
    this.pedido.setState(new DevolucaoRejeitada(this.pedido));
  }

  enviarParaAnalise(): void {
    console.log("O pedido já está em análise...");
  }

  enviarParaTransito(): void {
    console.log("Não é possível enviar para trânsito no estado de análise.");
  }
  
  finalizarDevolucao(): void {
    console.log("Não é possível finalizar no estado de análise.");
  }
}
