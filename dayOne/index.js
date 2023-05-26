const ListaDeCompras = require("./arrays.js");

// Criando uma instância da classe ListaDeCompras
const listaCompras = new ListaDeCompras();

// Adicionando itens à lista
listaCompras.adicionarItem("Leite", 5);
listaCompras.adicionarItem("Bombom", 10)
listaCompras.adicionarItem("Suco", -5);
listaCompras.adicionarItem("", 5);

// Listando todos os itens da lista
listaCompras.listarItens();

// Removendo um item da lista
listaCompras.removerItem("Leite");

// // Listando os itens restantes na lista
listaCompras.listarItens();
