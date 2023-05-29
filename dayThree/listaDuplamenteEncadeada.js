// Classe que representa um único nó (produto)
class Produto {
    constructor(nome, codigoBarras, preco, quantidade) {
        this.nome = nome;
        this.codigoBarras = codigoBarras;
        this.preco = preco;
        this.quantidade = quantidade;
        this.proximo = null;
        this.anterior = null;
    }
}

// Classe que representa a lista de produtos
class ListaDuplamenteEncadeada {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Adiciona um novo produto à lista
    adicionarProduto(nome, codigoBarras, preco, quantidade) {
        const novoProduto = new Produto(nome, codigoBarras, preco, quantidade);

        if (this.head === null) {
            this.head = novoProduto;
            this.tail = novoProduto;
        } else {
            this.tail.proximo = novoProduto;
            novoProduto.anterior = this.tail;
            this.tail = novoProduto;
        }
    }

    // Remove um produto da lista
    removerProduto(codigoBarras) {
        let produtoAtual = this.head;

        while (produtoAtual !== null) {
            if (produtoAtual.codigoBarras === codigoBarras) {
                if (produtoAtual === this.head) {
                    this.head = produtoAtual.proximo;
                    if (this.head !== null) {
                        this.head.anterior = null;
                    } else {
                        this.tail = null;
                    }
                } else if (produtoAtual === this.tail) {
                    this.tail = produtoAtual.anterior;
                    if (this.tail !== null) {
                        this.tail.proximo = null;
                    } else {
                        this.head = null;
                    }
                } else {
                    const produtoAnterior = produtoAtual.anterior;
                    const produtoProximo = produtoAtual.proximo;
                    produtoAnterior.proximo = produtoProximo;
                    produtoProximo.anterior = produtoAnterior;
                }

                console.log(`O produto com código de barras ${codigoBarras} foi removido.`);
                return;
            }

            produtoAtual = produtoAtual.proximo;
        }

        console.log(`O produto com código de barras ${codigoBarras} não foi encontrado na lista.`);
    }

    // Atualiza a quantidade de um produto na lista
    atualizarQuantidade(codigoBarras, novaQuantidade) {
        let produtoAtual = this.head;

        while (produtoAtual !== null) {
            if (produtoAtual.codigoBarras === codigoBarras) {
                produtoAtual.quantidade = novaQuantidade;
                console.log(`A quantidade do produto com código de barras ${codigoBarras} foi atualizada para ${novaQuantidade}.`);
                return;
            }

            produtoAtual = produtoAtual.proximo;
        }

        console.log(`O produto com código de barras ${codigoBarras} não foi encontrado na lista.`);
    }

    // Lista todos os produtos da lista
    listarProdutos() {
        let produtoAtual = this.head;

        if (produtoAtual === null) {
            console.log("A lista de produtos está vazia.");
            return;
        }

        console.log("Lista de produtos:");

        while (produtoAtual !== null) {
            console.log(`Código de Barras: ${produtoAtual.codigoBarras}, Nome: ${produtoAtual.nome}, Preço: ${produtoAtual.preco}, Quantidade: ${produtoAtual.quantidade}`);
            produtoAtual = produtoAtual.proximo;
        }
    }
}

// Exemplo de uso da lista de produtos
const listaProdutos = new ListaDuplamenteEncadeada();

// Adicionar produtos à lista
listaProdutos.adicionarProduto("Camiseta", "123456789", 29.99, 10);
listaProdutos.adicionarProduto("Calça", "987654321", 59.99, 5);
listaProdutos.adicionarProduto("Boné", "456789123", 19.99, 20);

// Listar todos os produtos
listaProdutos.listarProdutos();

// Atualizar a quantidade de um produto
listaProdutos.atualizarQuantidade("123456789", 15);

// Remover um produto da lista
listaProdutos.removerProduto("987654321");

// Listar os produtos restantes
listaProdutos.listarProdutos();
