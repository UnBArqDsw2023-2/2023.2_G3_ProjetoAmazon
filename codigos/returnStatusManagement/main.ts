import { PedidoDevolucao } from "./pedido-devolucao";

const pedido_devolucao = new PedidoDevolucao(); // Pendente
pedido_devolucao.enviarParaAnalise();
pedido_devolucao.aceitarDevolucao();
pedido_devolucao.enviarParaTransito();
pedido_devolucao.finalizarDevolucao();