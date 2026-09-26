// =========================================================
// 1. IMPORTAÇÕES
// Carrega templates, armazenamento e formulário
// =========================================================

import { paginas } from "./templates.js";
import { restaurarCadastro } from "./storage.js";
import { iniciarFormulario } from "./formulario.js";


// =========================================================
// 2. ELEMENTOS PRINCIPAIS DA INTERFACE
// Referências utilizadas durante toda a aplicação
// =========================================================

const conteudo = document.querySelector("#conteudo");
const botaoMenu = document.querySelector(".menu-hamburguer");
const menuLinks = document.querySelector(".menu-links");
const botaoContraste = document.querySelector(".botao-contraste");


// =========================================================
// 3. ROTEAMENTO DA SPA
// Renderiza o conteúdo correspondente à rota selecionada
// =========================================================

function carregarPagina() {

    const rota =
        window.location.hash.replace("#", "") || "inicio";

    conteudo.innerHTML =
        paginas[rota] || paginas.inicio;

    conteudo.className =
        `app-main pagina-${rota}`;

    if (rota === "cadastro") {
        restaurarCadastro();
    }

    fecharMenu();
}


// =========================================================
// 4. MENU RESPONSIVO
// Controla abertura e fechamento da navegação móvel
// =========================================================

function fecharMenu() {

    menuLinks.classList.remove("menu-aberto");

    botaoMenu.setAttribute(
        "aria-expanded",
        "false"
    );

    botaoMenu.setAttribute(
        "aria-label",
        "Abrir menu"
    );
}


botaoMenu.addEventListener("click", function () {

    const menuEstaAberto =
        menuLinks.classList.toggle("menu-aberto");

    botaoMenu.setAttribute(
        "aria-expanded",
        String(menuEstaAberto)
    );

    botaoMenu.setAttribute(
        "aria-label",
        menuEstaAberto
            ? "Fechar menu"
            : "Abrir menu"
    );
});


menuLinks.addEventListener("click", function (evento) {

    if (evento.target.closest("a")) {
        fecharMenu();
    }
});


// =========================================================
// 5. ALTO CONTRASTE
// Alterna o modo visual e salva a preferência localmente
// =========================================================

function atualizarBotaoContraste() {

    const ativo =
        document.body.classList.contains("alto-contraste");

    botaoContraste.setAttribute(
        "aria-pressed",
        String(ativo)
    );

    botaoContraste.setAttribute(
        "aria-label",
        ativo
            ? "Desativar alto contraste"
            : "Ativar alto contraste"
    );

    botaoContraste.setAttribute(
        "title",
        ativo
            ? "Desativar alto contraste"
            : "Ativar alto contraste"
    );
}


function restaurarContraste() {

    const preferencia =
        localStorage.getItem("alto-contraste");

    if (preferencia === "ativo") {
        document.body.classList.add("alto-contraste");
    }

    atualizarBotaoContraste();
}


botaoContraste.addEventListener("click", function () {

    document.body.classList.toggle("alto-contraste");

    const ativo =
        document.body.classList.contains("alto-contraste");

    localStorage.setItem(
        "alto-contraste",
        ativo ? "ativo" : "inativo"
    );

    atualizarBotaoContraste();
});


// =========================================================
// 6. INICIALIZAÇÃO DA APLICAÇÃO
// Ativa navegação, contraste e formulário
// =========================================================

window.addEventListener(
    "DOMContentLoaded",
    function () {

        restaurarContraste();
        carregarPagina();
    }
);


window.addEventListener(
    "hashchange",
    carregarPagina
);


iniciarFormulario(conteudo);