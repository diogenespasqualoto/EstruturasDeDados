class ListaDeCompras {
    constructor() {
        this.itens = [];
        this.quantidades = [];
    }

    adicionarItem(produto, quantidade) {
        if (this.validarProduto(produto) && this.validarQuantidade(quantidade)) {
            this.itens.push(produto);
            this.quantidades.push(quantidade);
            console.log(`O produto "${produto}" foi adicionado à lista.`);
        }
    }

    removerItem(produto) {
        const index = this.itens.indexOf(produto);
        if (index !== -1) {
            this.itens.splice(index, 1);
            this.quantidades.splice(index, 1);
            console.log(`O produto "${produto}" foi removido da lista.`);
        } else {
            console.log(`O produto "${produto}" não está na lista.`);
        }
    }

    listarItens() {
        if (this.itens.length === 0) {
            console.log("A lista de compras está vazia.");
        } else {
            console.log("Lista de compras:");
            for (let i = 0; i < this.itens.length; i++) {
                console.log(`${this.itens[i]} = ${this.quantidades[i]}`);
            }
        }
    }

    validarProduto(produto) {
        if (typeof produto !== "string" || produto.trim() === "") {
            console.log("Nome do produto inválido.");
            return false;
        }
        return true;
    }

    validarQuantidade(quantidade) {
        if (!Number.isInteger(quantidade) || quantidade <= 0) {
            console.log("Quantidade inválida. Deve ser um número inteiro positivo.");
            return false;
        }
        return true;
    }
}

module.exports = ListaDeCompras;
