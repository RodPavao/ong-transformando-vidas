import { paginas } from "./templates.js";
import { restaurarCadastro } from "./storage.js";
import { iniciarFormulario } from "./formulario.js";


// =========================================================
// 1. ELEMENTOS PRINCIPAIS DA APLICAÇÃO
// Obtém os elementos permanentes utilizados pelo script
// =========================================================

const conteudo = document.querySelector("#conteudo");
const botaoMenu = document.querySelector(".menu-hamburguer");
const menuLinks = document.querySelector(".menu-links");


// =========================================================
// 2. ROTEAMENTO E RENDERIZAÇÃO DA SPA
// Identifica a rota e renderiza o template correspondente
// =========================================================

function carregarPagina() {

    const rota =
        window.location.hash.replace("#", "") || "inicio";

    conteudo.innerHTML =
        paginas[rota] || paginas.inicio;

    if (rota === "projetos") {
        conteudo.className = "projetos-grid";
    } else {
        conteudo.className = "";
    }

    if (rota === "cadastro") {
        restaurarCadastro();
    }
}


// =========================================================
// 3. EVENTOS DE NAVEGAÇÃO
// Atualiza a interface durante o carregamento e troca de rota
// =========================================================

window.addEventListener("DOMContentLoaded", carregarPagina);
window.addEventListener("hashchange", carregarPagina);


// =========================================================
// 4. CONTROLE DO MENU RESPONSIVO
// Abre e fecha o menu hambúrguer em dispositivos móveis
// =========================================================

botaoMenu.addEventListener("click", function () {

    const menuEstaAberto =
        menuLinks.classList.toggle("menu-aberto");

    botaoMenu.setAttribute(
        "aria-expanded",
        menuEstaAberto
    );

    if (menuEstaAberto) {
        botaoMenu.setAttribute("aria-label", "Fechar menu");
    } else {
        botaoMenu.setAttribute("aria-label", "Abrir menu");
    }
});


// =========================================================
// 5. INICIALIZAÇÃO DO FORMULÁRIO
// Ativa os eventos responsáveis pela validação e cadastro
// =========================================================

iniciarFormulario(conteudo);