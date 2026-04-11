function salvar(lista) {
    localStorage.setItem("agendamentos", JSON.stringify(lista));
}

function carregar() {
    let dados = localStorage.getItem("agendamentos");
    return dados ? JSON.parse(dados) : [];
}