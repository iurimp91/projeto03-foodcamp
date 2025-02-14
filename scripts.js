let prato;
let bebida;
let sobremesa;
let precoPrato;
let precoBebida;
let precoSobremesa;
let liberarPedidoPrato;
let liberarPedidoBebida;
let liberarPedidoSobremesa;

function escolha1(item, check, opcao, preco) {
    prato = opcao;
    precoPrato = preco;
    liberarPedidoPrato = "on";

    const selecionadoBorda = document.querySelector(".menu-prato .borda-verde");
    const selecionadoCheck = document.querySelector(".menu-prato .borda-verde ion-icon");

    if (selecionadoBorda !== null) {
        selecionadoBorda.classList.remove("borda-verde");
    }

    if (selecionadoCheck !== null) {
        selecionadoCheck.classList.add("escondido");
    }

    const escolhaBorda = document.querySelector(item);
    escolhaBorda.classList.add("borda-verde");
    
    const escolhaCheck = document.querySelector(check);
    escolhaCheck.classList.remove("escondido");

    liberarPedidoBotao();
}

function escolha2(item, check, opcao, preco) {
    bebida = opcao;
    precoBebida = preco;
    liberarPedidoBebida = "on";

    const selecionadoBorda = document.querySelector(".menu-bebida .borda-verde");
    const selecionadoCheck = document.querySelector(".menu-bebida .borda-verde ion-icon");

    if (selecionadoBorda !== null) {
        selecionadoBorda.classList.remove("borda-verde");
    }

    if (selecionadoCheck !== null) {
        selecionadoCheck.classList.add("escondido");
    }

    const escolhaBorda = document.querySelector(item);
    escolhaBorda.classList.add("borda-verde");
    
    const escolhaCheck = document.querySelector(check);
    escolhaCheck.classList.remove("escondido");

    liberarPedidoBotao();
}

function escolha3(item, check, opcao, preco) {
    sobremesa = opcao;
    precoSobremesa = preco;
    liberarPedidoSobremesa = "on";

    const selecionadoBorda = document.querySelector(".menu-sobremesa .borda-verde");
    const selecionadoCheck = document.querySelector(".menu-sobremesa .borda-verde ion-icon");

    if (selecionadoBorda !== null) {
        selecionadoBorda.classList.remove("borda-verde");
    }

    if (selecionadoCheck !== null) {
        selecionadoCheck.classList.add("escondido");
    }

    const escolhaBorda = document.querySelector(item);
    escolhaBorda.classList.add("borda-verde");
    
    const escolhaCheck = document.querySelector(check);
    escolhaCheck.classList.remove("escondido");

    liberarPedidoBotao();
}

let soma;

function liberarPedidoBotao() {
    const botaoFechado = document.querySelector(".inferior .fechado");
    const botaoAberto = document.querySelector(".inferior .aberto");

    if (liberarPedidoPrato === "on" && liberarPedidoBebida === "on" && liberarPedidoSobremesa === "on") {
        botaoFechado.classList.add("escondido");
        botaoAberto.classList.remove("escondido");
    }
}

let nome;
let endereco;

function fecharPedido () {
    nome = prompt("Por favor, informe seu nome.");
    while (nome === null || nome === "") {
        nome = prompt("Por favor, informe seu nome.");
    }

    endereco = prompt("Por favor, informe seu endereço.");
    while (endereco === null || endereco === "") {
        endereco = prompt("Por favor, informe seu endereço.");
    }

    const confirmarPedido = document.querySelector(".confirmar-pedido");
    confirmarPedido.classList.remove("escondido");

    const confirmarPrato = document.querySelector(".confirmar-prato");
    confirmarPrato.innerHTML = prato;
    const confirmarPratoPreco = document.querySelector(".confirmar-preco-prato");
    confirmarPratoPreco.innerHTML = precoPrato.toFixed(2).replace(".", ",");

    const confirmarBebida = document.querySelector(".confirmar-bebida");
    confirmarBebida.innerHTML = bebida;
    const confirmarBebidaPreco = document.querySelector(".confirmar-preco-bebida");
    confirmarBebidaPreco.innerHTML = precoBebida.toFixed(2).replace(".", ",");

    const confirmarSobremesa = document.querySelector(".confirmar-sobremesa");
    confirmarSobremesa.innerHTML = sobremesa;
    const confirmarSobremesaPreco = document.querySelector(".confirmar-preco-sobremesa");
    confirmarSobremesaPreco.innerHTML = precoSobremesa.toFixed(2).replace(".", ",");

    soma = precoPrato + precoBebida + precoSobremesa;

    const precoTotal = document.querySelector(".preco-total");
    precoTotal.innerHTML = soma.toFixed(2).replace(".", ",");
}

function enviarMensagem() {
    let texto = "Olá, gostaria de fazer o pedido:\n- Prato: " + prato + "\n- Bebida: " + bebida + "\n- Sobremesa: " + sobremesa + "\nTotal: R$ " + soma.toFixed(2).replace(".", ",") + "\n\nNome: " + nome + "\nEndereço: " + endereco;
    texto = encodeURIComponent(texto);

    open("https://wa.me/5500912345678?text=" + texto);
}

function cancelar() {
    const cancelar = document.querySelector(".confirmar-pedido");
    cancelar.classList.add("escondido");
}