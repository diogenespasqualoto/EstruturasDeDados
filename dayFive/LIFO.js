// Classe que representa um único livro
class Livro {
    constructor(titulo, paginas) {
        this.titulo = titulo;
        this.paginas = paginas;
    }
}

// Classe que representa a pilha de livros
class PilhaDeLivros {
    constructor() {
        this.livros = [];
    }

    // Adiciona um novo livro à pilha (push)
    adicionarLivro(titulo, paginas) {
        const novoLivro = new Livro(titulo, paginas);
        this.livros.push(novoLivro);
        console.log(`Livro adicionado: ${titulo} (${paginas} páginas)`);
    }

    // Remove o livro do topo da pilha (pop)
    removerLivro() {
        if (this.livros.length === 0) {
            console.log("A pilha de livros está vazia.");
            return;
        }

        const livroRemovido = this.livros.pop();
        console.log(`Livro removido: ${livroRemovido.titulo} (${livroRemovido.paginas} páginas)`);
    }

    // Exibe o livro do topo da pilha (peek)
    exibirLivroDoTopo() {
        if (this.livros.length === 0) {
            console.log("A pilha de livros está vazia.");
            return;
        }

        const livroDoTopo = this.livros[this.livros.length - 1];
        console.log(`Livro do topo: ${livroDoTopo.titulo} (${livroDoTopo.paginas} páginas)`);
    }

    // Lista todos os livros da pilha
    listarLivros() {
        if (this.livros.length === 0) {
            console.log("A pilha de livros está vazia.");
            return;
        }

        console.log("Livros na pilha:");
        this.livros.forEach((livro, index) => {
            console.log(`Livro ${index + 1}: ${livro.titulo} (${livro.paginas} páginas)`);
        });
    }
}

// Exemplo de uso da pilha de livros
const pilhaLivros = new PilhaDeLivros();

// Adicionar livros à pilha
pilhaLivros.adicionarLivro("A Guerra dos Tronos", 694);
pilhaLivros.adicionarLivro("A Fúria dos Reis", 768);
pilhaLivros.adicionarLivro("A Tormenta de Espadas", 1184);

// Listar livros na pilha
pilhaLivros.listarLivros();

// Exibir livro do topo da pilha
pilhaLivros.exibirLivroDoTopo();

// Remover livro do topo da pilha
pilhaLivros.removerLivro();

// Listar livros restantes na pilha
pilhaLivros.listarLivros();
