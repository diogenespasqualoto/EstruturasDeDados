// Nó da lista encadeada
class Paciente {
    constructor(nome, id, estadoSaude) {
        this.nome = nome;
        this.id = id;
        this.estadoSaude = estadoSaude;
        this.proximoPaciente = null;
    }
}

// representa a lista encadeada de pacientes. head (cabeça) é o primeiro paciente  e tail (cauda) o último paciente.
class ListaDePacientes {
    constructor() {
        // ambas inicializadas como null indicam estar vazias
        this.head = null;
        this.tail = null;
    }
    // adiciona um novo paciente à lista encadeada. recebe os parâmetros nome, id e estadoSaude para criar um novo objeto Paciente.
    adicionarPaciente(nome, id, estadoSaude) {
        const novoPaciente = new Paciente(nome, id, estadoSaude);

        if (!this.head) {
            this.head = novoPaciente;
            this.tail = novoPaciente;
        } else {
            this.tail.proximoPaciente = novoPaciente;
            this.tail = novoPaciente;
        }
    }

    // remove um paciente da lista encadeada com base na identificação (ID)
    removerPaciente(id) {
        if (!this.head) {
            console.log("A lista de pacientes está vazia.");
            return;
        }

        if (this.head.id === id) {
            this.head = this.head.proximoPaciente;
            if (!this.head) {
                this.tail = null;
            }
            return;
        }

        let pacienteAtual = this.head;
        let pacienteAnterior = null;

        while (pacienteAtual) {
            if (pacienteAtual.id === id) {
                pacienteAnterior.proximoPaciente = pacienteAtual.proximoPaciente;
                if (pacienteAtual === this.tail) {
                    this.tail = pacienteAnterior;
                }
                return;
            }

            pacienteAnterior = pacienteAtual;
            pacienteAtual = pacienteAtual.proximoPaciente;
        }

        // se o paciente nao for encontrado
        console.log("Paciente não encontrado.");
    }

    // percorre a lista encadeada e imprime as informações de cada paciente
    listarPacientes() {
        if (!this.head) {
            // Se a lista estiver vazia, é exibida a mensagem 
            console.log("A lista de pacientes está vazia.");
            return;
        }

        let pacienteAtual = this.head;

        while (pacienteAtual) {
            console.log(`Nome: ${pacienteAtual.nome}`);
            console.log(`Identificação: ${pacienteAtual.id}`);
            console.log(`Estado de Saúde: ${pacienteAtual.estadoSaude}`);
            console.log("---------------------------");

            pacienteAtual = pacienteAtual.proximoPaciente;
        }
    }
}

// Exemplo de uso:
const listaPacientes = new ListaDePacientes();

// Adicionar pacientes
listaPacientes.adicionarPaciente("Diogenes", 1, "Estável");
listaPacientes.adicionarPaciente("Maria", 2, "Em tratamento intensivo");
listaPacientes.adicionarPaciente("Pedro", 3, "Em estado crítico");


// Listar pacientes
listaPacientes.listarPacientes();

// Remover paciente
listaPacientes.removerPaciente(2);

// Listar pacientes novamente
listaPacientes.listarPacientes();
