class Agendamento {
    constructor(cliente, data, hora, preco) {
        this.cliente = cliente;
        this.data = data;
        this.hora = hora;
        this.preco = preco;
    }

    exibir() {
        return `${this.cliente.nome} - ${this.data} ${this.hora} - R$${this.preco}`;
    }
}