// Classe que representa um único pedido
class Pedido {
    constructor(prato, mesa) {
        this.prato = prato;
        this.mesa = mesa;
    }
}

// Classe que representa a fila de pedidos
class FilaDePedidos {
    constructor() {
        this.pedidos = [];
    }

    // Adiciona um novo pedido à fila (enfileirar)
    adicionarPedido(prato, mesa) {
        const novoPedido = new Pedido(prato, mesa);
        this.pedidos.push(novoPedido);
        console.log(`Novo pedido: ${prato} (Mesa ${mesa})`);
    }

    // Remove o próximo pedido da fila (desenfileirar)
    removerPedido() {
        if (this.pedidos.length === 0) {
            console.log("A fila de pedidos está vazia.");
            return;
        }

        const pedidoRemovido = this.pedidos.shift();
        console.log(`Pedido entregue: ${pedidoRemovido.prato} (Mesa ${pedidoRemovido.mesa})`);
    }

    // Lista todos os pedidos da fila
    listarPedidos() {
        if (this.pedidos.length === 0) {
            console.log("A fila de pedidos está vazia.");
            return;
        }

        console.log("Pedidos na fila:");
        this.pedidos.forEach((pedido, index) => {
            console.log(`Pedido ${index + 1}: ${pedido.prato} (Mesa ${pedido.mesa})`);
        });
    }
}

// Exemplo de uso da fila de pedidos
const filaPedidos = new FilaDePedidos();

// Adicionar pedidos à fila
filaPedidos.adicionarPedido("Hambúrguer", 1);
filaPedidos.adicionarPedido("Pizza", 2);
filaPedidos.adicionarPedido("Sushi", 3);

// Listar pedidos na fila
filaPedidos.listarPedidos();

// Entregar um pedido e remover da fila
filaPedidos.removerPedido();

// Listar pedidos restantes na fila
filaPedidos.listarPedidos();
