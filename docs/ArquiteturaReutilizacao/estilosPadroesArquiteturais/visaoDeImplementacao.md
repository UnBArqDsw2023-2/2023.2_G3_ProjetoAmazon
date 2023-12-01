# Visão de Implementação

O Diagrama de Arquitetura de Software (DAS) é uma representação que revela a disposição e interações dos elementos de um sistema de software. Ele oferece uma visão global da arquitetura, destacando conexões entre componentes, estrutura em camadas e hierarquias. Essencialmente, o DAS facilita a análise das mudanças, identificação de problemas de design e excesso de dependências ao mostrar entradas, saídas, fluxo de dados, interfaces e interconexões entre os elementos do sistema. Em suma, parte do diagrama de componentes para visualizar e descrever as conexões e interdependências dos componentes, proporcionando compreensão da arquitetura completa do sistema.

## Diagrama de Componentes

À seguir, na <i> Figura 1</i>, estará representado o diagrama de componentes proposto pelo grupo, utilizando-se das técnicas de UML em sua formação. Vale ressaltar que a sigla RMA significa Return Merchandise Authorization.

<div style="text-align: center">
<figcaption style="text-align: center">
    <b>Figura 1: Diagrama de Componentes (UML)</b>
</figcaption>

![](.././assets/DiagramaComponentes.jpg)

</div>
<figcaption style="text-align: center">
   <b>Autor: Elaboração Própria (Henrique Pucci, Chaydson Ferreira)</b>
</figcaption>

## Componentes

Os componentes representam unidades funcionais que desempenham papéis específicos no sistema, fornecendo serviços ou funcionalidades essenciais. São como peças fundamentais que compõem o sistema, cada uma com suas próprias funções e responsabilidades.

Originados do diagrama de classes, os componentes foram estruturados em subsistemas individuais, cada um interagindo através de solicitações ou disponibilizando interfaces/serviços. A análise detalhada de cada componente e seus relacionamentos é crucial para compreender como operam e se conectam no sistema.

- **Usuário:** O componente pai é o componente _"Usuário"_, que é composto pelo componente filho `Autenticação`. Nessa seção, o usuário é autenticado, e recebe a autorização para acessar outras partes do sistema.
- **Compras:** O componente pai é o componente _"Compras"_, que é composto por dois componentes filho:`Carrinho` e `Produto`. O componente `Produto` armazena dados sobre os produtos que estão disponíveis na plataforma, ea partir dele, é estabelecido o componente `Carrinho`, que terá os produtos escohidos pelo usuário.
- **Cominicação:** O componente pai é o componente _"Comunicação"_, que é composto por dois componentes filho:`Suporte Técnico` e `Vendedor`. Os dois componentes filho podem ser solicitados, após o envio de uma solicitação de RMA, ou diretamente pelo próprio usuário.
- **Logística:** O componente pai é o componente _"Logística"_, que é composto por dois componentes filho:`Rastreamento` e `Transportadora`. O componente filho `Transportadora` será solicitado após o envio de uma lista de produtos, que vieram a partir do cancelamento de uma compra. E consequentemente, o `Rastreio` estará sendo solicitado.
- **Gestão de produtos:** O componente pai é o componente _"Gestão de Produtos"_, que é composto pelos componentes:`Historico de Produtos`, `Gerenciamento de Produto`, `Filtro de Produto` e `Cancelamento de Produto`. Esses componentes foram projetados com base nos serviços que os usuários usarão na plataforma, cada parte representa uma função da plataforma. Por exemplo em `Histórico de Produtos`, o usuário pode acessar os produtos selecionados, e com o gerenciamento dos produtos selecionados, em `Cancelamento de Produto` o usuário efetuará o cancelamento da compra de seu produto selecionado.
- **RMA:** O componente pai é o componente _"RMA(Return Material Authorization)"_, que é composto por dois componentes filho:`Devolução` e `Estorno`. Esses dois componentes representam os dois tipos de retorno após o cancelamento de um produto pelo usuário.

## Relacionamentos e dependências
Com os relacionamentos será possível entender como os diferentes subsistemas se relacionam entre si, possibilitando uma compreensão profunda sobre o funciona da aplicação.

A seguir temos os relacionamentos modelados no diagrama:

- **Usuário - Comunicação:** O componente `Usuário` garantirá um acesso seguro ao componente de `Comunicação`, onde o usuário terá acesso ao suporte técnico bem como as partes relacionadas com o vendedor.
- **Gestão de produtos - Comunicação:** Esse relacionamento é muito importante, pois o componente de `Comunicação` será comunicado pelo componente de `Gestão de Produtos` um cancelamento ou reembolso do pedido for requerido, permitindo uma comunicação eficiente entre as partes.
- **Gestão de produtos - Logística:** Aqui teremos o relacionamento entre o componente `Gestão de Produtos` e `Logística`. Como o transporte de mercadorias será efetuado, a transportadora será informada sobre como processar com os produtos que deverão ser entregues.
- **Compras - Gestão de produtos:** Nesse relacionamento o componente `Compras` fornecerá para o componente `Gestão de Produtos` os produtos escolhidos pelo usuário, permitindo a execução da compra.
- **RMA - Gestão de produtos:** O componente `RMA` mandara para o componente `Gestão de Produtos` as informações necessárias para a realização do procedimento de estorno ou devolução do produto.


## Metodologia
Foi realizada uma reunião remota, onde analisamos as correções apontadas pela professora sobre o diagrama em questão e após revisar o conteúdo por meio das aulas gravadas e da bibliografia corrigimos os pontos de melhoria aplicados. O diagrama foi feito de forma simultânea onde analisamos e discutimos como aplicar os conceitos aprendidos.

## Referências

- Diagrama de componentes UML: o que é, como fazer e exemplos. Disponível em: <https://www.lucidchart.com/pages/pt/diagrama-de-componentes-uml>. Acesso em: 30 nov. 2023.

- UML Component Diagrams. Disponível em: <https://www.uml-diagrams.org/component-diagrams.html>. Acesso em: 30 nov. 2023.

- The Unified Modeling Language. Disponível em: <https://www.uml-diagrams.org/>. Acesso em: 30 nov. 2023.

## Histórico de versão

| Versão |    Data    |          Descrição           |                            Autor                            |                                  Revisor                                  |
| :----: | :--------: | :--------------------------: | :---------------------------------------------------------: | :-----------------------------------------------------------------------: |
|  1.0   | 30/11/2023 | Criação inicial do documento | Henrique Pucci, Chaydson Fereira|  |