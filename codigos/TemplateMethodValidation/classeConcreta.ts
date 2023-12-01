import { classeAbstrata } from "./classeAbstrata";

const usuarioExemplo = {
  nomeUsuario: "BlueDragon87",
  senha: "FireStorm23",
};

let identificadorUsuario = 0;

export class classeConcreta extends classeAbstrata {
  AtenticacaoUsuario(
    identificador: number,
    usuario: string,
    senha: string
  ): boolean {
    if (
      usuario == usuarioExemplo.nomeUsuario &&
      senha == usuarioExemplo.senha
    ) {
      console.log(`Usuário Autenticado`);
      identificadorUsuario = identificador;
      return true;
    }
    return false;
  }

  ValidacaoPedido(identificador: number, data: Date): boolean {
    const dataValida = new Date();
    dataValida.setDate(dataValida.getDate() - 30);
    if (dataValida <= data) {
      console.log(`Pedido Válido para reembolso`);
      return true;
    }
    return false;
  }

  ValidacaoReembolso(
    identificador: number,
    numero_cartao: string,
    agencia: string,
    conta: string
  ): boolean {
    if (
      (numero_cartao.length < 16 || numero_cartao.length > 13) &&
      agencia.length == 4 &&
      conta.length == 6
    ) {
      console.log(`Metodo de reembolso é válido`);
      return true;
    }

    return false;
  }

  ValidacaoEnvioEndereco(identificador: number, cep: string): boolean {
    if (cep.length === 9) {
      console.log(`CEP ${cep} é válido.`);
      return true;
    }

    return false;
  }
}
