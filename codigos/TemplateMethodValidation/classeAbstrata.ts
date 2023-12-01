export abstract class classeAbstrata {
  template(
    cep: string,
    numero_cartao: string,
    agencia: string,
    conta: string,
    identificador: number,
    data: Date,
    usuario: string,
    senha: string
  ): void {
    if (!this.AtenticacaoUsuario(identificador, usuario, senha)) return;
    if (!this.ValidacaoPedido(identificador, data)) return;
    if (!this.ValidacaoReembolso(identificador, numero_cartao, agencia, conta))
      return;
    if (!this.ValidacaoEnvioEndereco(identificador, cep)) return;

    // Se todos os passos forem bem-sucedidos, continue a execução
    console.log("Todos os passos foram validados com sucesso");
  }

  // Métodos abstratos que serão implementados pelas subclasses concretas
  abstract AtenticacaoUsuario(
    identificador: number,
    usuario: string,
    senha: string
  ): boolean;
  abstract ValidacaoPedido(identificador: number, data: Date): boolean;
  abstract ValidacaoReembolso(
    identificador: number,
    numero_cartao: string,
    agencia: string,
    conta: string
  ): boolean;
  abstract ValidacaoEnvioEndereco(identificador: number, cep: string): boolean;
}
