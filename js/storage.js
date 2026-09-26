// =========================================================
// 1. ARMAZENAMENTO DO CADASTRO
// Salva os dados válidos utilizando localStorage
// =========================================================

export function salvarCadastro(formulario) {

    const dadosCadastro = {
        nome: formulario.nome.value,
        email: formulario.email.value,
        nascimento: formulario.nascimento.value,
        cpf: formulario.cpf.value,
        telefone: formulario.telefone.value,
        cep: formulario.cep.value,
        rua: formulario.rua.value,
        numero: formulario.numero.value,
        bairro: formulario.bairro.value,
        cidade: formulario.cidade.value,
        estado: formulario.estado.value
    };

    localStorage.setItem(
        "cadastroONG",
        JSON.stringify(dadosCadastro)
    );
}


// =========================================================
// 2. RECUPERAÇÃO DO CADASTRO
// Recupera os dados armazenados e restaura o formulário
// =========================================================

export function restaurarCadastro() {

    const dadosSalvos = localStorage.getItem("cadastroONG");

    if (!dadosSalvos) {
        return;
    }

    const dadosCadastro = JSON.parse(dadosSalvos);

    const formulario = document.querySelector("#conteudo form");

    if (!formulario) {
        return;
    }

    formulario.nome.value = dadosCadastro.nome || "";
    formulario.email.value = dadosCadastro.email || "";
    formulario.nascimento.value = dadosCadastro.nascimento || "";
    formulario.cpf.value = dadosCadastro.cpf || "";
    formulario.telefone.value = dadosCadastro.telefone || "";
    formulario.cep.value = dadosCadastro.cep || "";
    formulario.rua.value = dadosCadastro.rua || "";
    formulario.numero.value = dadosCadastro.numero || "";
    formulario.bairro.value = dadosCadastro.bairro || "";
    formulario.cidade.value = dadosCadastro.cidade || "";
    formulario.estado.value = dadosCadastro.estado || "";
}