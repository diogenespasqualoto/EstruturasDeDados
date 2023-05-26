// index.js

const ListaDeCompras = require("./arrays.js");

// Criando uma instância da classe ListaDeCompras
const listaCompras = new ListaDeCompras();

// Adicionando itens à lista
listaCompras.adicionarItem("Maçã", 5);
listaCompras.adicionarItem("Leite", 2);
listaCompras.adicionarItem("Pão", 1);

// Listando todos os itens da lista
listaCompras.listarItens();

// Removendo um item da lista
listaCompras.removerItem("Leite");

// Listando os itens restantes na lista
listaCompras.listarItens();
