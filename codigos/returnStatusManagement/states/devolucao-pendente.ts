import { PedidoDevolucao } from "../pedido-devolucao";
import { PedidoDevolucaoEstado } from "../interfaces/pedido-devolucao-estado";
import { DevolucaoAprovada } from "./devolucao-aprovada";
import { DevolucaoRejeitada } from "./devolucao-rejeitada";
import { DevolucaoEmAnalise } from "./devolucao-em-analise";

export class DevolucaoPendente implements PedidoDevolucaoEstado {
  nome: String = "Pendente";
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
    console.log("Pedido de devolução aprovado!");
    this.pedido.setState(new DevolucaoAprovada(this.pedido));
  }
  rejeitarDevolucao(): void {
    console.log("Devolução rejeitada!");
    this.pedido.setState(new DevolucaoRejeitada(this.pedido));
  }
  enviarParaAnalise(): void {
    console.log("Enviando devolução para análise...");
    this.pedido.setState(new DevolucaoEmAnalise(this.pedido));
  }
  enviarParaTransito(): void {
    console.log("Não é possível enviar para trânsito no estado pendente.");
  }
  finalizarDevolucao(): void {
    console.log("Não é possível finalizar no estado pendente.");
  }
}
