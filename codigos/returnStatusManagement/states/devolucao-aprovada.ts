import { PedidoDevolucaoEstado } from "../interfaces/pedido-devolucao-estado";
import { PedidoDevolucao } from "../pedido-devolucao";
import { DevolucaoEmTransito } from "./devolucao-em-transito";

export class DevolucaoAprovada implements PedidoDevolucaoEstado {
  nome: String = "Aprovado";
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
    console.log("A devolução já está aprovada.");
  }

  rejeitarDevolucao(): void {
    console.log("A devolução não pode ser rejeitada pois já está aprovada.");
  }

  enviarParaAnalise(): void {
    console.log("O pedido já foi analisado.");
  }

  enviarParaTransito(): void {
    console.log("Objeto em trânsito");
    this.pedido.setState(new DevolucaoEmTransito(this.pedido));
  }

  finalizarDevolucao(): void {
    console.log(
      "Não é possível finalizar um pedido que ainda não entrou em trânsito."
    );
  }
}
