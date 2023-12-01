import { PedidoDevolucaoEstado } from "../interfaces/pedido-devolucao-estado";
import { PedidoDevolucao } from "../pedido-devolucao";

export class DevolucaoConcluida implements PedidoDevolucaoEstado {
  nome: String = "Finalizado";
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
    console.log("Não é possível aceitar uma devolução finalizada...");
  }
  rejeitarDevolucao(): void {
    console.log("Não é possível rejeitar uma devolução finalizada...");
  }
  enviarParaAnalise(): void {
    console.log(
      "Não é possível enviar para análise uma devolução finalizada..."
    );
  }
  enviarParaTransito(): void {
    console.log(
      "Não é possível enviar para trânsito uma devolução finalizada..."
    );
  }
  finalizarDevolucao(): void {
    console.log("A devolução já está finalizada.");
  }
}
