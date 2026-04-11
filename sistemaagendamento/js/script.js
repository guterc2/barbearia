let sistema = new Sistema();


let dados = carregar();

sistema.agendamentos = dados.map(d => {
    let cliente = new Cliente(d.cliente.nome, d.cliente.telefone);
    return new Agendamento(cliente, d.data, d.hora, d.preco);
});

atualizarLista();

function criarAgendamento() {
    let nome = document.getElementById("nome").value;
    let telefone = document.getElementById("telefone").value;
    let data = document.getElementById("data").value;
    let hora = document.getElementById("hora").value;
    let preco = document.getElementById("preco").value;

    let cliente = new Cliente(nome, telefone);
    let ag = new Agendamento(cliente, data, hora, preco);

    sistema.adicionar(ag);

    atualizarLista();
}

function atualizarLista() {
    let lista = document.getElementById("lista");
    lista.innerHTML = "";

    sistema.listar().forEach((ag, index) => {
        let li = document.createElement("li");
        li.textContent = ag.exibir();

        let btn = document.createElement("button");
        btn.textContent = "Cancelar";
        btn.onclick = () => {
            sistema.remover(index);
            atualizarLista();
        };

        li.appendChild(btn);
        lista.appendChild(li);
    });
}