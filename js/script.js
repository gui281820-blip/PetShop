// Função responsável por confirmar o agendamento
function confirmarAgendamento() {
    const nomeCliente = document.getElementById("nomeCliente").value;
    const nomePet = document.getElementById("nomePet").value;
    const data = document.getElementById("data").value;
    const hora = document.getElementById("hora").value;

    const mensagem = document.getElementById("mensagemAgendamento");

    if (nomeCliente === "" || nomePet === "" || data === "" || hora === "") {
        mensagem.innerHTML = "Por favor, preencha os campos obrigatórios.";
        mensagem.style.color = "red";
    } else {
        mensagem.innerHTML = "Agendamento realizado com sucesso para " + nomePet + ", pet de " + nomeCliente + ".";
        mensagem.style.color = "green";
    }
}