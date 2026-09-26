// =========================================================
// 1. TEMPLATES DAS ROTAS
// Centraliza as visões dinâmicas utilizadas pela SPA
// =========================================================

export const paginas = {

    inicio: `
        <section>
            <h2>Sobre a ONG</h2>

            <p>
                Nossa ONG desenvolve projetos sociais para apoiar
                pessoas e comunidades que precisam de ajuda.
            </p>

            <img
                src="../imagens/images-5-1.jpg"
                alt="Pessoas unindo as mãos em gesto de colaboração">
        </section>

        <section>
            <h2>Como ajudar</h2>

            <p>
                Você pode contribuir por meio de doações ou
                participando de nossos projetos como voluntário.
            </p>
        </section>
    `,

    projetos: `
        <section>
            <h2>Doações</h2>

            <article>
                <h3>
                    <span class="badge">Doação</span>
                    Contribua com nossos projetos
                </h3>

                <p>
                    As doações ajudam a manter e ampliar as ações
                    sociais desenvolvidas pela ONG.
                </p>
            </article>
        </section>

        <section>
            <h2>Voluntariado</h2>

            <article>
                <h3>
                    <span class="badge">Voluntariado</span>
                    Participe como voluntário
                </h3>

                <p>
                    Você pode contribuir com seu tempo e suas habilidades
                    participando das atividades e projetos da ONG.
                </p>
            </article>
        </section>

        <section class="feedback-demo">
            <h2>Feedback da plataforma</h2>

            <div class="feedback feedback-sucesso" role="status">
                ✓ Cadastro de interesse realizado com sucesso.
            </div>

            <div class="feedback feedback-erro" role="alert">
                ✕ Não foi possível concluir o cadastro.
                Verifique os dados informados.
            </div>

            <div class="feedback feedback-alerta" role="alert">
                ⚠ Existem campos que precisam ser revisados antes do envio.
            </div>
        </section>
    `,

    cadastro: `
        <form>
            <fieldset>
                <legend>Dados pessoais</legend>

                <label for="nome">Nome Completo:</label>
                <input type="text" id="nome" name="nome" required>

                <label for="email">E-mail:</label>
                <input type="email" id="email" name="email" required>

                <label for="nascimento">Data de nascimento:</label>
                <input type="date" id="nascimento" name="nascimento" required>

                <label for="cpf">CPF:</label>
                <input type="text" id="cpf" name="cpf"
                    pattern="\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}"
                    title="Formato: 000.000.000-00" required>

                <label for="telefone">Telefone:</label>
                <input type="tel" id="telefone" name="telefone"
                    pattern="\\(\\d{2}\\) \\d{5}-\\d{4}"
                    title="Formato: (00) 00000-0000" required>
            </fieldset>

            <fieldset>
                <legend>Endereço</legend>

                <label for="cep">CEP:</label>
                <input type="text" id="cep" name="cep"
                    pattern="\\d{5}-\\d{3}"
                    title="Formato: 00000-000" required>

                <label for="rua">Rua:</label>
                <input type="text" id="rua" name="rua" required>

                <label for="numero">Número:</label>
                <input type="text" id="numero" name="numero" required>

                <label for="bairro">Bairro:</label>
                <input type="text" id="bairro" name="bairro" required>

                <label for="cidade">Cidade:</label>
                <input type="text" id="cidade" name="cidade" required>

                <label for="estado">Estado:</label>
                <input type="text" id="estado" name="estado" required>
            </fieldset>

            <button type="submit">Enviar cadastro</button>
        </form>
    `
};