# Estudo sobre a metodologia ágil XP

## Origem

Na busca pela eficácia nos projetos e pela eficiência dentro das equipes, foi idealizado na década de 90, um método de desenvolver software, o Extreme Programming, mais conhecido como XP.

A origem da XP remonta aos anos 90 quando Kent Beck — que mais tarde se tornaria um dos autores do Manifesto Ágil — a criou quando foi contratado para liderar a equipe do Sistema Compreensivo de Compensação da Chrysler.

O projeto havia começado em 1993 e em 1996 não havia progredido muito. Como Beck era novo no gerenciamento de equipes, ele decidiu que o melhor curso de ação seria ensinar aos membros de sua equipe as técnicas e práticas que funcionavam para ele. Eles começaram a aplicar práticas como a programação em pares e o TDD com grande sucesso. Ron Jeffries — um amigo de Beck e outro autor do Manifesto Ágil — foi levado para treinar a equipe do C3.

## Principal Base

A programação extrema é uma metodologia de desenvolvimento de software que faz parte do que é conhecido coletivamente como metodologias ágeis. A XP é construída sobre valores, princípios e práticas, e seu objetivo é permitir que equipes pequenas e médias produzam software de alta qualidade e se adaptem a requisitos em evolução e mudança.

Pode-se dizer, que o Extreme Programming é uma metodologia ágil para equipes que desenvolvem software baseado em requisitos vagos e que se modificam rapidamente. Para isso, adota a estratégia de constante acompanhamento e realização de vários pequenos ajustes durante o desenvolvimento de software.

Dessa forma, uma equipe XP, usando fases simultâneas, produz software implantável todas as semanas. Isto é, em cada iteração, a equipe analisa, projeta, codifica, testa e implementa um subconjunto de recursos. o XP prescreve práticas de desenvolvimento específicas destinadas a melhorar a colaboração com os usuários, planejamento, desenvolvimento e teste.

## Visão geral, principios e boas práticas

### Ciclo

O Ciclo de Vida do XP é iterativo e incremental, uma característica que permite um desenvolvimento mais ágil e adaptável. Inicia-se com a fase de "planejamento", onde as histórias de usuário são coletadas e priorizadas. Este planejamento não é rígido, permite ajustes conforme o projeto evolui. Após o planejamento, passa-se para o "design", onde a estrutura básica do software é estabelecida. Segue-se a "codificação", onde a implementação real acontece. Os "testes" são contínuos e acontecem em paralelo com a codificação. Finalmente, o "feedback do cliente" é coletado e incorporado no próximo ciclo de desenvolvimento. Este ciclo não é um conjunto de etapas lineares, mas um fluxo contínuo que favorece a adaptação e a resposta rápida às mudanças.

### Princípios

Feedback Contínuo: Este princípio fala que os desenvolvedores e clientes devem estar em sintonia constante. Não se trata apenas de uma comunicação unidirecional, mas sim de um diálogo aberto que permite ajustes e adaptações. O feedback contínuo ajuda a identificar erros mais cedo, economizando tempo e recursos no longo prazo.
Assumir mudanças: Mudar requisitos, algoritmos, ou até mesmo a arquitetura do software, se necessário, para atender às necessidades do projeto e do cliente.
Simplicidade: No XP, a simplicidade não se aplica apenas ao código, mas também à estrutura do projeto e à forma como os membros da equipe interagem. Fazer o mais simples possível é uma maneira eficaz de reduzir erros e acelerar o desenvolvimento.
Iteração Rápida: O XP valoriza ciclos de desenvolvimento curtos que fornecem valor rapidamente ao cliente, tornando fácil incorporar feedback e fazer ajustes.
Qualidade acima de Tudo: No XP, a qualidade não é algo a ser adicionado posteriormente. Ela é considerada em cada etapa, desde o planejamento até a entrega.

### Boas Práticas

XP também é conhecido por suas "boas práticas", que são técnicas recomendadas para se conseguir o melhor resultado no desenvolvimento de software. Algumas dessas práticas são:
Programação Coletiva: Além da programação em pares, a ideia de "propriedade coletiva do código" é incentivada. Isso significa que qualquer desenvolvedor pode mudar qualquer parte do código, o que aumenta a responsabilidade coletiva e melhora a qualidade do código.
Integração Contínua Avançada: A Integração Contínua vai além de simplesmente integrar e testar alterações de código várias vezes ao dia. Também envolve a automatização do processo de build e deploy, permitindo entregas mais rápidas e seguras.
Revisão de Código: Embora a programação em pares seja uma forma de revisão de código em tempo real, revisões adicionais, possivelmente automatizadas, podem ser incorporadas para aumentar ainda mais a qualidade do código.
Documentação Ágil: A documentação não é esquecida no XP. No entanto, é feita de uma maneira que fornece o máximo de valor com o mínimo de trabalho, focando apenas nos aspectos que são realmente necessários para os desenvolvedores e stakeholders entenderem o sistema.
Testes de Aceitação Automatizados: Além dos testes unitários em TDD, testes de aceitação automatizados garantem que o sistema como um todo está funcionando como deveria, conforme definido pelos critérios de aceitação.
Métricas e KPIs: O uso de métricas e indicadores-chave de desempenho (KPIs) ajuda a avaliar a eficácia do processo e a fazer ajustes conforme necessário.

### Práticas de Bem-Estar da Equipe

Sustentabilidade: O XP reconhece que o bem-estar da equipe é crucial para o sucesso a longo prazo. Práticas como evitar horas extras excessivas e manter um ambiente de trabalho saudável são fundamentais.
Treinamento e Desenvolvimento: Investir no desenvolvimento das habilidades da equipe não é apenas uma boa prática em geral, mas também algo que pode beneficiar o projeto diretamente.

Conjuntamente, esses elementos formam a estrutura de como o XP opera. Eles atuam em conjunto para tornar o processo de desenvolvimento mais eficiente, colaborativo e adaptável a mudanças.
Espero que essa visão geral tenha fornecido uma compreensão mais clara e profunda do Extreme Programming. Agora, vou passar a palavra para o Lopes, que vai falar sobre os prós e contras dessa metodologia.

## Prós e Contras

### Pró

#### Feedback contínuo

- Intensa colaboração entre desenvolvedores e clientes.

#### Qualidade de código

- Práticas como (TDD) e refatoração constante promovem a criação de código mais limpo e sustentável.

#### Flexibilidade

- Permite ajustes e mudanças sem grande impacto.

#### Entrega incremental

- Funcionalidades são entregues em pequenos incrementos.

#### Comunicação eficaz

- Interação frequente entre membros da equipe e stakeholders.

### Contra

#### Foco na equipe

- Pode ser mais adequada para equipes pequenas.

#### Ênfase em testes

- A abordagem de testes intensivos pode aumentar o tempo de desenvolvimento.

#### Maturidade da equipe

- Equipes menos experientes podem ter dificuldade em implementar as práticas de maneira eficaz.

#### Documentação limitada

- A ênfase na comunicação face a face pode levar a uma documentação insuficiente.

## Exemplo prático

### Definições Iniciais

Inicialmente, definimos alguns papéis importantes dentro da metodologia XP. Para nosso exemplo, utilizaremos 3 papéis: Devs, Testers e Cliente.

#### O Projeto

Utilizamos o nosso como um breve exemplo.

Projeto: Amazon
Perfil Comprador, Perfil Vendedor, Fluxo Reclamação, devolução e estorno subsequente.

### Iterações

Dividindo em pequenas entregas para cada iteração. (small releases)

### 1ª Iteração

Release Plan:

- Definir o desenvolvimento do Perfil Comprador.

Histórias de Usuário:

- Como cliente, desejo cadastrar meus dados pessoais na plataforma
- Como cliente, desejo buscar por produtos.

Pair Programming:

- Ocorre a negociação entre programadores e pareamento do time, para desenvolvimento do código de cadastramento de usuário com perfil comprador e desenvolvimento de sistema de buscas de produtos.

TDD:

- Testes criados antes do desenvolvimento do código, com intuito de aferir se os dados inseridos no cadastro respeitam as especificações de requisitos e a infraestrutura do banco de dados(tipagem dos dados, expressões regulares…), além da possibilidade de checagem de produtos à venda. A condução e desenvolvimento do código em seguida.

Continuous Integration:

- Adição dos códigos desenvolvidos, testados e revisados para a base do projeto. Utilização de testes automatizados para garantir que não ocorra problemas com a base do projeto já avaliada.

Feedback do cliente.

- Entendimento, percepção e avaliação do cliente para a entrega da iteração.

### 2ª Iteração

Release Plan:

- Definir o desenvolvimento do Perfil Vendedor.

Histórias de Usuário:

- Como vendedor, desejo cadastrar meus dados pessoais na plataforma
- Como vendedor, desejo cadastrar meus produtos na plataforma..

Pair Programming:

- Ocorre a negociação entre programadores e pareamento do time, para desenvolvimento do código de cadastramento de usuário com perfil vendedor e desenvolvimento do código de cadastramento de produtos na plataforma.

TDD:

- Testes criados antes do desenvolvimento do código, com intuito de aferir se os dados inseridos no cadastro respeitam as especificações de requisitos e a infraestrutura do banco de dados(tipagem dos dados, expressões regulares…), além da possibilidade da checagem de dados específicos sobre os produtos, como categoria, custo e quantidade.

Continuous Integration:

- Adição dos códigos desenvolvidos, testados e revisados para a base do projeto. Utilização de testes automatizados para garantir que não ocorra problemas com a base do projeto já avaliada.

Feedback do cliente.

- Entendimento, percepção e avaliação do cliente para a entrega da iteração.

### 3ª Iteração

- Refino do projeto desenvolvido e integrado.
- Últimos testes de integração dos sistemas.
- Melhorias.

## O que cada membro fez

| Membro         | O que fez                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Artur          |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Chaydson       |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Gabriel        | - Estudo dos materiais passado.<br />- Estudo dos materiais passados por membros do Lucas Frazão, Pedro Helias e contido no grupo desenvolvido Henrique. <br />- Estudo dos conteúdos explicitados para serem criados(origem, ciclo, princípios, exemplos de uso).<br />- Revisão de Conteúdo dos Slides - Redesign e criação de imagens dos slides.<br />- Demonstração para o time do que foi criados por membros do Lucas Frazão, Pedro Helias e contido no grupo desenvolvido Henrique. |
| Henrique       | - Estudo sobre a origem do XP.<br />- Estudo sobre a Base do XP. <br />- Apresentação em sala de aula.                                                                                                                                                                                                                                                                                                                                                                                      |
| Lucas Frazão   | - Estudo sobre o ciclo de vida e princípio do XP.<br />- Elaboração da parte do ciclo de vida e princípio do XP. <br />- Organização dos membros. <br />- Apresentação em sala de aula.                                                                                                                                                                                                                                                                                                     |
| Mateus         |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Pedro Helias   |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Pedro Henrique | - Estudo sobre o ciclo de vida e princípio do XP.<br />- Estudo sobre a origem do XP. <br />- Criação e animação dos slides a respeito do ciclo de vida e princípio do XP. <br />- Criação e animação dos slides a respeito da origem do XP.                                                                                                                                                                                                                                                |
| Samuel Gomes   | - Estudo do XP.<br />- Criação do quadro de disponibilidade. <br />- Elaboração do slide sobre a base principal do XP.                                                                                                                                                                                                                                                                                                                                                                      |

## Slide

Com todos os estudos feitos, montamos o slide encontrado no [link](https://www.canva.com/design/DAFs4a_nhAU/x3erKNqrS-sCuaqLuDtKrQ/view)

## Bibliografia

- What Is Extreme Programming (XP)? - Values, Principles, And Practices. Nimblework. Disponível em: <https://www.nimblework.com/pt-br/agile/programacao-extrema-xp/>. Acesso em: 30 ago. 2023.

- What is Extreme Programming (XP)? Agile Alliance |. Disponível em: <https://www.agilealliance.org/glossary/xp/#q=~(infinite~false~filters~(postType~(~'post~'aa_book~'aa_event_session~'aa_experience_report~'aa_glossary~'aa_research_paper~'aa_video)~tags~(~'xp))~searchTerm~'~sort~false~sortDirection~'asc~page~1)>. Acesso em: 30 ago. 2023.

- TALREJA, Abhay. All About Extreme Programming (XP): Values, Principles, and Practices. Teachingagile.com. Disponível em: <https://teachingagile.com/extreme-programming-xp/overview>. Acesso em: 30 ago. 2023.

‌

## Histórico de versão

| Versão |    Data    |      Descrição       |                     Autor                      | Revisor |
| :----: | :--------: | :------------------: | :--------------------------------------------: | :-----: |
|  1.0   | 31/08/2023 | Criação do documento | Lucas Frazão, Henrique, Pedro Henrique, Samuel | Mateus  |

‌
