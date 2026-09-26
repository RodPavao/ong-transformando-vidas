import { salvarCadastro } from "./storage.js";


// =========================================================
// 1. INICIALIZAÇÃO DOS EVENTOS DO FORMULÁRIO
// Utiliza delegação de eventos para formulários dinâmicos
// =========================================================

export function iniciarFormulario(conteudoPrincipal) {

    conteudoPrincipal.addEventListener("submit", function (event) {

        if (!event.target.matches("form")) {
            return;
        }

        event.preventDefault();

        const formulario = event.target;

        const feedbackAnterior =
            formulario.querySelector(".feedback-formulario");

        if (feedbackAnterior) {
            feedbackAnterior.remove();
        }

        if (formulario.checkValidity()) {

            salvarCadastro(formulario);

            criarFeedback(
                formulario,
                "feedback-sucesso",
                "status",
                "✓ Cadastro realizado com sucesso."
            );

        } else {

            criarFeedback(
                formulario,
                "feedback-erro",
                "alert",
                "✕ Existem campos vazios ou preenchidos em formato incorreto. Revise os dados."
            );

            formulario.reportValidity();
        }
    });
}


// =========================================================
// 2. CRIAÇÃO DO FEEDBACK VISUAL
// Reutiliza a mesma função para mensagens de sucesso e erro
// =========================================================

function criarFeedback(formulario, classe, role, mensagem) {

    const feedback = document.createElement("div");

    feedback.className =
        `feedback ${classe} feedback-formulario`;

    feedback.setAttribute("role", role);
    feedback.textContent = mensagem;

    formulario.appendChild(feedback);
}