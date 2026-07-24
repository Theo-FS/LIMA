
        const paragrafo = document.querySelector("#paragrafo");
        const botao = document.querySelector("#botao");
        botao.addEventListener("click", () => {
            paragrafo.innerHTML = "Segundo parágrafo foi atualizado"
        });