// Importação do array de dados de produtos
import { compras } from "./data";

// Definição do tipo Produto
type Produto = {
  id: number;
  nome: string;
  preco: number;
  categoria: string;
  marca: string;
  cor: string;
};

// Interface Filtro
interface Filtro {
  filtrar(produtos: Produto[]): Produto[];
}

// Classe de contexto
class Filtro_Contexto {
  private FiltroAtual: Filtro = null as any;

  public setFiltro(f: Filtro): void {
    this.FiltroAtual = f;
  }

  public executarFiltro(produtos: Produto[]): Produto[] {
    return this.FiltroAtual.filtrar(produtos);
  }
}

// Estratégia de filtro por preço
class Filtro_Price implements Filtro {
  private precoMin: number;
  private precoMax: number;

  constructor(min: number, max: number) {
    this.precoMin = min;
    this.precoMax = max;
  }

  public filtrar(produtos: Produto[]): Produto[] {
    return produtos.filter(
      (p) => p.preco >= this.precoMin && p.preco <= this.precoMax
    );
  }
}

// Estratégia de filtro por categoria
class Filtro_Categoria implements Filtro {
  private categoria: string;

  constructor(categoria: string) {
    this.categoria = categoria;
  }

  public filtrar(produtos: Produto[]): Produto[] {
    return produtos.filter((p) => p.categoria === this.categoria);
  }
}

// Estratégia de filtro por marca
class Filtro_Marca implements Filtro {
  private marca: string;

  constructor(marca: string) {
    this.marca = marca;
  }

  public filtrar(produtos: Produto[]): Produto[] {
    return produtos.filter((p) => p.marca === this.marca);
  }
}

// Estratégia de filtro por cor
class Filtro_Cor implements Filtro {
  private cor: string;

  constructor(cor: string) {
    this.cor = cor;
  }

  public filtrar(produtos: Produto[]): Produto[] {
    return produtos.filter((p) => p.cor === this.cor);
  }
}

// Função principal que executa os filtros
function main() {
  const filtroContexto = new Filtro_Contexto();

  // Filtro por preço
  const filtroPorPreco = new Filtro_Price(10, 100);
  filtroContexto.setFiltro(filtroPorPreco);
  console.log("Filtrando por preço", filtroContexto.executarFiltro(compras));

  // Filtro por categoria
  const filtroPorCategoria = new Filtro_Categoria("Utensílios de Cozinha");
  filtroContexto.setFiltro(filtroPorCategoria);
  console.log("Filtrando por categoria", filtroContexto.executarFiltro(compras));

  // Filtro por marca
  const filtroPorMarca = new Filtro_Marca("Dell");
  filtroContexto.setFiltro(filtroPorMarca);
  console.log("Filtrando por marca", filtroContexto.executarFiltro(compras));

  // Filtro por cor
  const filtroPorCor = new Filtro_Cor("Preto");
  filtroContexto.setFiltro(filtroPorCor);
  console.log("Filtrando por cor", filtroContexto.executarFiltro(compras));
}

main();
