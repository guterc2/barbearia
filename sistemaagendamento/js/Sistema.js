class Sistema {
    constructor() {
        this.agendamentos = [];
    }

    adicionar(agendamento) {
        this.agendamentos.push(agendamento);
        salvar(this.agendamentos);
    }

    listar() {
        return this.agendamentos;
    }

    remover(index) {
        this.agendamentos.splice(index, 1);
        salvar(this.agendamentos);
    }
}