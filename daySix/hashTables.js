// Criação do objeto para armazenar os jogadores e pontuações
const pontuacoes = {};

// Função para adicionar um novo jogador
function AdicionaNovoJogadorAoJogoComNomeEPontuaçãoInicial(nome, pontos) {
    pontuacoes[nome] = pontos;
}

// Função para atualizar a pontuação de um jogador existente
function AtualizaPontuacaoDeUmJogadorExistente(nome, pontos) {
    if (pontuacoes.hasOwnProperty(nome)) {
        pontuacoes[nome] = pontos;
    } else {
        console.log(`Jogador '${nome}' não encontrado.`);
    }
}

// Função para remover um jogador
function RemoveUmJogadorDoJogoComBaseNoNome(nome) {
    if (pontuacoes.hasOwnProperty(nome)) {
        delete pontuacoes[nome];
    } else {
        console.log(`Jogador '${nome}' não encontrado.`);
    }
}

// Função para listar todos os jogadores em ordem decrescente de pontos
function ListaTodosJogadoresEsuasPontuaçõesEmOrdemDecrescente() {
    const jogadoresOrdenados = Object.entries(pontuacoes).sort((a, b) => b[1] - a[1]);
    jogadoresOrdenados.forEach(([jogador, pontos]) => {
        console.log(`Jogador: ${jogador} - Pontos: ${pontos}`);
    });
}

// Função para determinar o vencedor
function DeterminaOVencedorDoJogo() {
    const jogadores = Object.entries(pontuacoes);
    if (jogadores.length > 0) {
        const [vencedor, pontosVencedor] = jogadores.reduce((max, curr) => (curr[1] > max[1] ? curr : max));
        console.log(`O vencedor é '${vencedor}' com ${pontosVencedor} pontos.`);
    } else {
        console.log("Não há jogadores registrados.");
    }
}

// Exemplo de uso
AdicionaNovoJogadorAoJogoComNomeEPontuaçãoInicial("Jogador1", 10);
AdicionaNovoJogadorAoJogoComNomeEPontuaçãoInicial("Jogador2", 11);
AtualizaPontuacaoDeUmJogadorExistente("Jogador1", 15);
// RemoveUmJogadorDoJogoComBaseNoNome("Jogador1");
ListaTodosJogadoresEsuasPontuaçõesEmOrdemDecrescente();
DeterminaOVencedorDoJogo();
