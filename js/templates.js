// =========================================================
// 1. RECURSOS VISUAIS
// Importa a imagem para que o Vite a inclua no build
// =========================================================

// =========================================================
// 1.a RECURSO VISUAL DA PÁGINA INICIAL
// Resolve a imagem tanto no desenvolvimento quanto no build
// =========================================================

const imagemColaboracao = new URL(
    "../html/assets/images-5-1.webp",
    import.meta.url
).href;


// =========================================================
// 2. TEMPLATES DAS ROTAS
// Centraliza as visões dinâmicas utilizadas pela aplicação
// =========================================================

export const paginas = {

    // =====================================================
    // 2.1. PÁGINA INICIAL
    // Apresentação institucional e chamadas para ação
    // =====================================================

    inicio: `
        <section class="hero">

            <div class="hero-conteudo">

                <span class="eyebrow">
                    Transformação social começa com participação
                </span>

                <h1>
                    Pequenas atitudes podem transformar
                    grandes histórias.
                </h1>

                <p class="hero-descricao">
                    Conectamos pessoas dispostas a ajudar a projetos
                    sociais que geram impacto positivo nas comunidades.
                </p>

                <div class="hero-acoes">

                    <a
                        href="#projetos"
                        class="botao botao-primario">
                        Conhecer projetos
                    </a>

                    <a
                        href="#cadastro"
                        class="botao botao-secundario">
                        Quero participar
                    </a>

                </div>

                <div class="hero-indicadores">

                    <div>
                        <strong>Comunidade</strong>
                        <span>Conexões que geram impacto</span>
                    </div>

                    <div>
                        <strong>Voluntariado</strong>
                        <span>Tempo e conhecimento compartilhados</span>
                    </div>

                    <div>
                        <strong>Solidariedade</strong>
                        <span>Apoio a iniciativas sociais</span>
                    </div>

                </div>

            </div>


            <div class="hero-imagem">

                <img
                    src="${imagemColaboracao}"
                    alt="Pessoas unindo as mãos em gesto de colaboração">

                <div class="hero-imagem-legenda">
                    <span>Impacto coletivo</span>

                    <strong>
                        Juntos podemos fazer a diferença.
                    </strong>
                </div>

            </div>

        </section>


        <section class="secao">

            <div class="secao-cabecalho">

                <span class="eyebrow">
                    Como participar
                </span>

                <h2>
                    Existem várias formas de fazer parte dessa transformação.
                </h2>

                <p>
                    Escolha como você deseja contribuir e conheça
                    as iniciativas disponíveis.
                </p>

            </div>


            <div class="cards-grid">

                <article class="card">

                    <span class="card-numero">
                        01
                    </span>

                    <h3>
                        Faça uma doação
                    </h3>

                    <p>
                        Contribuições ajudam a manter e ampliar
                        projetos sociais desenvolvidos pela ONG.
                    </p>

                    <a href="#projetos">
                        Conhecer iniciativas
                    </a>

                </article>


                <article class="card">

                    <span class="card-numero">
                        02
                    </span>

                    <h3>
                        Seja voluntário
                    </h3>

                    <p>
                        Compartilhe seu tempo, conhecimento e habilidades
                        participando das atividades da organização.
                    </p>

                    <a href="#cadastro">
                        Demonstrar interesse
                    </a>

                </article>


                <article class="card">

                    <span class="card-numero">
                        03
                    </span>

                    <h3>
                        Ajude a divulgar
                    </h3>

                    <p>
                        Compartilhar projetos amplia o alcance das ações
                        e aproxima novas pessoas da causa.
                    </p>

                    <a href="#projetos">
                        Ver projetos
                    </a>

                </article>

            </div>

        </section>
    `,


    // =====================================================
    // 2.2. PÁGINA DE PROJETOS
    // Apresenta formas de apoio, doação e voluntariado
    // =====================================================

    projetos: `
        <section class="pagina-intro">

            <span class="eyebrow">
                Projetos sociais
            </span>

            <h1>
                Escolha como você deseja contribuir.
            </h1>

            <p>
                Toda participação é importante. Conheça as principais
                formas de apoiar as iniciativas da ONG.
            </p>

        </section>


        <section class="projetos-grid">

            <article class="projeto-card">

                <span class="badge">
                    Doação
                </span>

                <h2>
                    Contribua com nossos projetos
                </h2>

                <p>
                    As doações ajudam a manter e ampliar as ações
                    sociais desenvolvidas pela ONG e permitem que
                    novas iniciativas sejam realizadas.
                </p>

                <a
                    class="botao botao-primario"
                    href="#cadastro">
                    Quero contribuir
                </a>

            </article>


            <article class="projeto-card">

                <span class="badge">
                    Voluntariado
                </span>

                <h2>
                    Participe como voluntário
                </h2>

                <p>
                    Você pode contribuir com seu tempo, experiência
                    e habilidades, apoiando atividades e projetos
                    desenvolvidos pela organização.
                </p>

                <a
                    class="botao botao-secundario"
                    href="#cadastro">
                    Quero participar
                </a>

            </article>

        </section>


        <section class="feedback-demo">

            <div class="secao-cabecalho">

                <span class="eyebrow">
                    Comunicação acessível
                </span>

                <h2>
                    Feedback claro durante a utilização.
                </h2>

            </div>


            <div
                class="feedback feedback-sucesso"
                role="status">

                <strong>
                    Sucesso
                </strong>

                <span>
                    Cadastro de interesse realizado com sucesso.
                </span>

            </div>


            <div
                class="feedback feedback-erro"
                role="alert">

                <strong>
                    Atenção
                </strong>

                <span>
                    Não foi possível concluir o cadastro.
                    Verifique os dados informados.
                </span>

            </div>


            <div
                class="feedback feedback-alerta"
                role="alert">

                <strong>
                    Revisão necessária
                </strong>

                <span>
                    Existem campos que precisam ser revisados antes do envio.
                </span>

            </div>

        </section>
    `,


    // =====================================================
    // 2.3. PÁGINA DE CADASTRO
    // Formulário acessível para registro de interesse
    // =====================================================

    cadastro: `
        <section class="pagina-intro">

            <span class="eyebrow">
                Faça parte
            </span>

            <h1>
                Cadastre seu interesse em ajudar.
            </h1>

            <p>
                Preencha os dados abaixo para registrar seu interesse
                em participar das iniciativas da ONG.
            </p>

        </section>


        <section class="formulario-container">

            <form class="cadastro-form">

                <fieldset>

                    <legend>
                        Dados pessoais
                    </legend>

                    <div class="form-grid">

                        <div class="campo campo-largo">

                            <label for="nome">
                                Nome completo
                            </label>

                            <input
                                type="text"
                                id="nome"
                                name="nome"
                                autocomplete="name"
                                required>

                        </div>


                        <div class="campo campo-largo">

                            <label for="email">
                                E-mail
                            </label>

                            <input
                                type="email"
                                id="email"
                                name="email"
                                autocomplete="email"
                                required>

                        </div>


                        <div class="campo">

                            <label for="nascimento">
                                Data de nascimento
                            </label>

                            <input
                                type="date"
                                id="nascimento"
                                name="nascimento"
                                required>

                        </div>


                        <div class="campo">

                            <label for="cpf">
                                CPF
                            </label>

                            <input
                                type="text"
                                id="cpf"
                                name="cpf"
                                inputmode="numeric"
                                pattern="\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}"
                                title="Formato: 000.000.000-00"
                                placeholder="000.000.000-00"
                                required>

                        </div>


                        <div class="campo campo-largo">

                            <label for="telefone">
                                Telefone
                            </label>

                            <input
                                type="tel"
                                id="telefone"
                                name="telefone"
                                autocomplete="tel"
                                pattern="\\(\\d{2}\\) \\d{5}-\\d{4}"
                                title="Formato: (00) 00000-0000"
                                placeholder="(00) 00000-0000"
                                required>

                        </div>

                    </div>

                </fieldset>


                <fieldset>

                    <legend>
                        Endereço
                    </legend>

                    <div class="form-grid">

                        <div class="campo">

                            <label for="cep">
                                CEP
                            </label>

                            <input
                                type="text"
                                id="cep"
                                name="cep"
                                autocomplete="postal-code"
                                inputmode="numeric"
                                pattern="\\d{5}-\\d{3}"
                                title="Formato: 00000-000"
                                placeholder="00000-000"
                                required>

                        </div>


                        <div class="campo campo-largo">

                            <label for="rua">
                                Rua
                            </label>

                            <input
                                type="text"
                                id="rua"
                                name="rua"
                                autocomplete="address-line1"
                                required>

                        </div>


                        <div class="campo">

                            <label for="numero">
                                Número
                            </label>

                            <input
                                type="text"
                                id="numero"
                                name="numero"
                                required>

                        </div>


                        <div class="campo">

                            <label for="bairro">
                                Bairro
                            </label>

                            <input
                                type="text"
                                id="bairro"
                                name="bairro"
                                required>

                        </div>


                        <div class="campo campo-largo">

                            <label for="cidade">
                                Cidade
                            </label>

                            <input
                                type="text"
                                id="cidade"
                                name="cidade"
                                autocomplete="address-level2"
                                required>

                        </div>


                        <div class="campo">

                            <label for="estado">
                                Estado
                            </label>

                            <input
                                type="text"
                                id="estado"
                                name="estado"
                                autocomplete="address-level1"
                                maxlength="2"
                                placeholder="RJ"
                                required>

                        </div>

                    </div>

                </fieldset>


                <div class="form-acoes">

                    <p>
                        Seus dados são utilizados apenas nesta demonstração
                        acadêmica e armazenados localmente no navegador.
                    </p>

                    <button
                        class="botao botao-primario"
                        type="submit">
                        Enviar cadastro
                    </button>

                </div>

            </form>

        </section>
    `
};