// Classe que representa um produto
class Produto {
    constructor(id, nome, quantidade) {
        this.id = id;
        this.nome = nome;
        this.quantidade = quantidade;
    }
}

// Classe que representa um nó da árvore
class Node {
    constructor(produto) {
        this.produto = produto;
        this.esquerda = null;
        this.direita = null;
    }
}

// Classe que representa a árvore de produtos
class ArvoreProduto {
    constructor() {
        this.raiz = null;
    }

    inserir(id, nome, quantidade) {
        const novoProduto = new Produto(id, nome, quantidade);
        if (this.raiz === null) {
            this.raiz = new Node(novoProduto);
            console.log("Produto inserido:", novoProduto.nome);
        } else {
            this._inserir(novoProduto, this.raiz);
        }
    }

    _inserir(produto, node) {
        if (produto.id < node.produto.id) {
            if (node.esquerda === null) {
                node.esquerda = new Node(produto);
                console.log("Produto inserido:", produto.nome);
            } else {
                this._inserir(produto, node.esquerda);
            }
        } else if (produto.id > node.produto.id) {
            if (node.direita === null) {
                node.direita = new Node(produto);
                console.log("Produto inserido:", produto.nome);
            } else {
                this._inserir(produto, node.direita);
            }
        }
    }
    buscar(id) {
        return this._buscar(id, this.raiz);
    }

    _buscar(id, node) {
        if (node === null || id === node.produto.id) {
            return node;
        }

        if (id < node.produto.id) {
            return this._buscar(id, node.esquerda);
        } else {
            return this._buscar(id, node.direita);
        }
    }

}

// Exemplo de uso da árvore de produtos
const arvoreProdutos = new ArvoreProduto();
arvoreProdutos.inserir(1, "Produto 1", 10);
arvoreProdutos.inserir(2, "Produto 2", 5);
arvoreProdutos.inserir(3, "Produto 3", 8);
const produtoEncontrado = arvoreProdutos.buscar(1);
if (produtoEncontrado) {
    console.log("Produto encontrado:", produtoEncontrado.produto.nome);
} else {
    console.log("Produto não encontrado");
}