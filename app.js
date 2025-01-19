let tarefaDigitada = document.getElementById("tarefa");
const botao = document.getElementById("adicionar");
const mensagem = document.getElementById("exibir-mensagem");
const listaTarefa = document.getElementById("lista-tarefas");

function mensagemListaVazia() {
    const valorLista = document.querySelector(".mensagem-lista-vazia");
    const itens = listaTarefa.querySelectorAll(".container-elementos");
    if (itens.length === 0) {
        valorLista.style.display = "block";
    } else {
        valorLista.style.display = "none";
    }
}
mensagemListaVazia();

botao.addEventListener("click", () => {
    if (tarefaDigitada.value === "") {
        alert("Digite um item!");
        return;
    } else {
        const tarefa = document.createElement("li");
        const containerLi = document.createElement("div");
        containerLi.classList.add("container-li");
        tarefa.textContent = tarefaDigitada.value;
        listaTarefa.appendChild(containerLi);

        mensagemListaVazia();
        tarefaDigitada.value = "";


        const inputCheck = document.createElement("input");
        inputCheck.classList.add("checkbox");
        inputCheck.type = "checkbox";
        const containerCheckButton = document.createElement("div");
        containerCheckButton.classList.add("container-check-button");
        // listaTarefa.appendChild(containerCheckButton);

        containerCheckButton.appendChild(inputCheck);
        containerLi.appendChild(tarefa);
        const containerElementos = document.createElement("div");
        containerElementos.classList.add("container-elementos");
        listaTarefa.appendChild(containerElementos);
        containerElementos.appendChild(containerLi);
        containerElementos.appendChild(containerCheckButton);

        inputCheck.addEventListener("click", function () {
            if (inputCheck.checked) {
                tarefa.style.textDecoration = "line-through";
            } else {
                tarefa.style.textDecoration = "none";
            }
        });

        const remover = document.createElement("button");
        remover.classList.add("remover");
        remover.textContent = "Remover";
        remover.addEventListener("click", () => {
            containerElementos.remove();
            mensagemListaVazia();
        });

        containerCheckButton.appendChild(remover);
        mensagemListaVazia();
    }
});








