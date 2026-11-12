// HISTÓRIAS DOS ATLETAS

const atletas = {
    pele: {
        nome: "Pelé",
        esporte: "Futebol",
        historia: `
            <p>
                Edson Arantes do Nascimento, conhecido mundialmente como Pelé,
                foi um dos maiores jogadores da história do futebol. Conquistou
                três Copas do Mundo com a Seleção Brasileira e alcançou reconhecimento
                internacional ainda muito jovem.
            </p>

            <p>
                Como homem negro em destaque mundial, Pelé viveu em um período
                em que o racismo estava presente dentro e fora dos estádios.
                Em entrevistas, relatou ter sido alvo de ofensas racistas durante
                sua carreira.
            </p>

            <p>
                Sua trajetória também teve importância simbólica: sua presença
                no topo do futebol mundial ajudou a ampliar a visibilidade de
                atletas negros. Mais tarde, também se manifestou sobre desigualdade
                e participação da população negra na sociedade.
            </p>
        `
    },

    daiane: {
        nome: "Daiane dos Santos",
        esporte: "Ginástica artística",
        historia: `
            <p>
                Daiane dos Santos é uma das principais referências da ginástica
                artística brasileira. Em 2001, tornou-se a primeira brasileira,
                entre homens e mulheres, a conquistar uma medalha de ouro em
                um Campeonato Mundial da modalidade.
            </p>

            <p>
                Em entrevista à ONU Mulheres, Daiane falou abertamente sobre
                situações de racismo que enfrentou ao longo de sua trajetória.
                Ela contou como essas experiências fizeram parte de sua vida
                desde a infância e durante sua carreira esportiva.
            </p>

            <p>
                Sua história representa pioneirismo, resistência e abertura
                de caminhos para outras meninas negras que desejam ocupar
                espaços no esporte.
            </p>
        `
    },

    rebeca: {
        nome: "Rebeca Andrade",
        esporte: "Ginástica artística",
        historia: `
            <p>
                Rebeca Andrade é uma das maiores atletas da história do esporte
                brasileiro. Conquistou medalhas olímpicas em Tóquio 2020 e Paris
                2024, tornando-se a maior medalhista olímpica do Brasil.
            </p>

            <p>
                Além dos resultados esportivos, Rebeca destaca a importância
                da representatividade. Como mulher negra em uma modalidade
                que historicamente teve poucas referências brasileiras negras
                no alto rendimento, tornou-se inspiração para muitas crianças
                e adolescentes.
            </p>

            <p>
                Sua trajetória mostra como oportunidades, apoio e referências
                podem ajudar novas gerações a enxergar possibilidades dentro
                do esporte.
            </p>
        `
    },

    hamilton: {
        nome: "Lewis Hamilton",
        esporte: "Fórmula 1",
        historia: `
            <p>
                Lewis Hamilton é um dos maiores pilotos da história da Fórmula 1
                e foi o primeiro piloto negro a competir na categoria.
                Ao longo da carreira, conquistou sete títulos mundiais.
            </p>

            <p>
                Hamilton também passou a usar sua visibilidade para discutir
                racismo e falta de diversidade no automobilismo. Em 2020,
                participou da criação da Hamilton Commission, iniciativa
                que estudou as barreiras enfrentadas por pessoas negras
                para entrar e crescer no automobilismo do Reino Unido.
            </p>

            <p>
                O relatório da comissão apresentou recomendações para ampliar
                a participação de pessoas negras no esporte e em áreas
                relacionadas à ciência, tecnologia e engenharia.
            </p>
        `
    }
};


// ELEMENTOS DO MODAL

const modal = document.getElementById("athlete-modal");
const modalTitle = document.getElementById("modal-title");
const modalSport = document.getElementById("modal-sport");
const modalText = document.getElementById("modal-text");
const closeButton = document.getElementById("modal-close");


// ABRIR HISTÓRIA DO ATLETA

const buttons = document.querySelectorAll(".read-more");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const athleteId = button.dataset.athlete;
        const athlete = atletas[athleteId];

        if (!athlete) {
            return;
        }

        modalTitle.textContent = athlete.nome;
        modalSport.textContent = athlete.esporte;
        modalText.innerHTML = athlete.historia;

        modal.classList.add("active");
        modal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";

        closeButton.focus();
    });
});


// FECHAR MODAL

function fecharModal() {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
}

closeButton.addEventListener("click", fecharModal);


// FECHAR AO CLICAR FORA DA JANELA

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        fecharModal();
    }
});


// FECHAR COM A TECLA ESC

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("active")) {
        fecharModal();
    }
});


// ANIMAÇÃO DOS ELEMENTOS AO ROLAR A PÁGINA

const elementosReveal = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
    const observador = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12
    });

    elementosReveal.forEach((elemento) => {
        observador.observe(elemento);
    });
} else {
    elementosReveal.forEach((elemento) => {
        elemento.classList.add("visible");
    });
}


// ANO AUTOMÁTICO NO RODAPÉ

document.getElementById("current-year").textContent =
    new Date().getFullYear();