import { PedidoDevolucaoEstado } from "./interfaces/pedido-devolucao-estado";
import { DevolucaoPendente } from "./states/devolucao-pendente";

export class PedidoDevolucao {
    private estado: PedidoDevolucaoEstado = new DevolucaoPendente(this);

    getState(): PedidoDevolucaoEstado {
        return this.estado;
    }

    setState(estado: PedidoDevolucaoEstado): void {
        this.estado = estado;
        console.log(`\x1b[33mO estado do pedido de devolução agora é: ${this.estado.nome}\x1b[0m`)
    }

    aceitarDevolucao(): void {
        this.estado.aceitarDevolucao();
    }

    rejeitarDevolucao(): void {
        this.estado.rejeitarDevolucao();
    }

    enviarParaAnalise(): void {
        this.estado.enviarParaAnalise();
    }

    enviarParaTransito(): void {
        this.estado.enviarParaTransito();
    }

    finalizarDevolucao(): void {
        this.estado.finalizarDevolucao();
    }
}