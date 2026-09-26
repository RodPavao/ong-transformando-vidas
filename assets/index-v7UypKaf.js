(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={inicio:`
        <section>
            <h2>Sobre a ONG</h2>

            <p>
                Nossa ONG desenvolve projetos sociais para apoiar
                pessoas e comunidades que precisam de ajuda.
            </p>

            <img
    src="/ong-transformando-vidas/assets/images-5-1-DsIPxYUg.webp"
    alt="Pessoas unindo as mãos em gesto de colaboração">
    
        </section>

        <section>
            <h2>Como ajudar</h2>

            <p>
                VocÃª pode contribuir por meio de doaÃ§Ãµes ou
                participando de nossos projetos como voluntÃ¡rio.
            </p>
        </section>
    `,projetos:`
        <section>
            <h2>DoaÃ§Ãµes</h2>

            <article>
                <h3>
                    <span class="badge">DoaÃ§Ã£o</span>
                    Contribua com nossos projetos
                </h3>

                <p>
                    As doaÃ§Ãµes ajudam a manter e ampliar as aÃ§Ãµes
                    sociais desenvolvidas pela ONG.
                </p>
            </article>
        </section>

        <section>
            <h2>Voluntariado</h2>

            <article>
                <h3>
                    <span class="badge">Voluntariado</span>
                    Participe como voluntÃ¡rio
                </h3>

                <p>
                    VocÃª pode contribuir com seu tempo e suas habilidades
                    participando das atividades e projetos da ONG.
                </p>
            </article>
        </section>

        <section class="feedback-demo">
            <h2>Feedback da plataforma</h2>

            <div class="feedback feedback-sucesso" role="status">
                âœ“ Cadastro de interesse realizado com sucesso.
            </div>

            <div class="feedback feedback-erro" role="alert">
                âœ• NÃ£o foi possÃ­vel concluir o cadastro.
                Verifique os dados informados.
            </div>

            <div class="feedback feedback-alerta" role="alert">
                âš\xA0 Existem campos que precisam ser revisados antes do envio.
            </div>
        </section>
    `,cadastro:`
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
                <legend>EndereÃ§o</legend>

                <label for="cep">CEP:</label>
                <input type="text" id="cep" name="cep"
                    pattern="\\d{5}-\\d{3}"
                    title="Formato: 00000-000" required>

                <label for="rua">Rua:</label>
                <input type="text" id="rua" name="rua" required>

                <label for="numero">NÃºmero:</label>
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
    `};function t(e){let t={nome:e.nome.value,email:e.email.value,nascimento:e.nascimento.value,cpf:e.cpf.value,telefone:e.telefone.value,cep:e.cep.value,rua:e.rua.value,numero:e.numero.value,bairro:e.bairro.value,cidade:e.cidade.value,estado:e.estado.value};localStorage.setItem(`cadastroONG`,JSON.stringify(t))}function n(){let e=localStorage.getItem(`cadastroONG`);if(!e)return;let t=JSON.parse(e),n=document.querySelector(`#conteudo form`);n&&(n.nome.value=t.nome||``,n.email.value=t.email||``,n.nascimento.value=t.nascimento||``,n.cpf.value=t.cpf||``,n.telefone.value=t.telefone||``,n.cep.value=t.cep||``,n.rua.value=t.rua||``,n.numero.value=t.numero||``,n.bairro.value=t.bairro||``,n.cidade.value=t.cidade||``,n.estado.value=t.estado||``)}function r(e){e.addEventListener(`submit`,function(e){if(!e.target.matches(`form`))return;e.preventDefault();let n=e.target,r=n.querySelector(`.feedback-formulario`);r&&r.remove(),n.checkValidity()?(t(n),i(n,`feedback-sucesso`,`status`,`✓ Cadastro realizado com sucesso.`)):(i(n,`feedback-erro`,`alert`,`✕ Existem campos vazios ou preenchidos em formato incorreto. Revise os dados.`),n.reportValidity())})}function i(e,t,n,r){let i=document.createElement(`div`);i.className=`feedback ${t} feedback-formulario`,i.setAttribute(`role`,n),i.textContent=r,e.appendChild(i)}var a=document.querySelector(`#conteudo`),o=document.querySelector(`.menu-hamburguer`),s=document.querySelector(`.menu-links`);function c(){let t=window.location.hash.replace(`#`,``)||`inicio`;a.innerHTML=e[t]||e.inicio,a.className=t===`projetos`?`projetos-grid`:``,t===`cadastro`&&n()}window.addEventListener(`DOMContentLoaded`,c),window.addEventListener(`hashchange`,c),o.addEventListener(`click`,function(){let e=s.classList.toggle(`menu-aberto`);o.setAttribute(`aria-expanded`,e),e?o.setAttribute(`aria-label`,`Fechar menu`):o.setAttribute(`aria-label`,`Abrir menu`)}),r(a);var l=document.querySelector(`.botao-contraste`);l.addEventListener(`click`,function(){let e=document.body.classList.toggle(`alto-contraste`);l.setAttribute(`aria-pressed`,e),l.textContent=e?`Contraste normal`:`Alto contraste`});