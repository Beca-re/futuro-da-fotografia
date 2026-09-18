// ==============================
// NOMES ALEATÓRIOS
// ==============================

const nomes = [
    "Gabriel",
    "Ana",
    "Lucas",
    "Mariana",
    "Pedro",
    "Julia",
    "Rafael",
    "Beatriz",
    "João",
    "Larissa"
];


// ==============================
// AFIRMAÇÕES ALEATÓRIAS
// ==============================

const afirmacoes = [
    "está ajudando a construir um futuro mais sustentável.",
    "está usando a tecnologia para resolver problemas.",
    "está aprendendo novas formas de cuidar do planeta.",
    "está enfrentando os desafios do futuro.",
    "está trabalhando para melhorar a vida das pessoas.",
    "está criando novas ideias para o mundo.",
    "está descobrindo como a tecnologia pode ajudar a humanidade.",
    "está pensando em soluções para o futuro.",
    "está colaborando para transformar a sociedade.",
    "está participando da missão de construir um mundo melhor."
];


// ==============================
// 10 PERGUNTAS
// ==============================

const perguntas = [

    {
        pergunta: "Qual atitude ajuda a preservar o meio ambiente?",
        opcoes: [
            "Economizar água",
            "Desperdiçar água",
            "Jogar lixo nas ruas"
        ],
        correta: 0
    },

    {
        pergunta: "Qual tecnologia pode ajudar na construção do futuro?",
        opcoes: [
            "Inteligência artificial",
            "Máquina de escrever",
            "Telefone com fio"
        ],
        correta: 0
    },

    {
        pergunta: "Por que devemos economizar energia?",
        opcoes: [
            "Para reduzir o desperdício de recursos",
            "Para gastar mais energia",
            "Para aumentar a poluição"
        ],
        correta: 0
    },

    {
        pergunta: "Qual dessas atitudes contribui para um planeta mais sustentável?",
        opcoes: [
            "Reciclar materiais",
            "Jogar tudo no lixo comum",
            "Desperdiçar alimentos"
        ],
        correta: 0
    },

    {
        pergunta: "O que pode ajudar as pessoas a enfrentar desafios do futuro?",
        opcoes: [
            "Educação e conhecimento",
            "Ignorar os problemas",
            "Evitar aprender coisas novas"
        ],
        correta: 0
    },

    {
        pergunta: "Qual é uma possível vantagem da inteligência artificial?",
        opcoes: [
            "Ajudar na resolução de problemas",
            "Eliminar todo o aprendizado humano",
            "Impedir novas descobertas"
        ],
        correta: 0
    },

    {
        pergunta: "Qual atitude ajuda a reduzir a quantidade de lixo?",
        opcoes: [
            "Reutilizar objetos",
            "Comprar e jogar fora imediatamente",
            "Desperdiçar materiais"
        ],
        correta: 0
    },

    {
        pergunta: "Por que a colaboração é importante para o futuro?",
        opcoes: [
            "Porque diferentes pessoas podem criar soluções juntas",
            "Porque ninguém precisa aprender sozinho",
            "Porque os problemas desaparecem automaticamente"
        ],
        correta: 0
    },

    {
        pergunta: "Qual dessas fontes é considerada uma fonte de energia renovável?",
        opcoes: [
            "Energia solar",
            "Carvão",
            "Petróleo"
        ],
        correta: 0
    },

    {
        pergunta: "Qual habilidade será importante para enfrentar as mudanças do futuro?",
        opcoes: [
            "Aprender e se adaptar",
            "Nunca mudar de ideia",
            "Parar de estudar"
        ],
        correta: 0
    }

];


// ==============================
// VARIÁVEIS DO JOGO
// ==============================

let perguntaAtual = 0;

let pontuacao = 0;


// ==============================
// ELEMENTOS HTML
// ==============================

const telaInicial =
    document.querySelector("#tela-inicial");

const telaJogo =
    document.querySelector("#tela-jogo");

const telaFinal =
    document.querySelector("#tela-final");


const botaoIniciar =
    document.querySelector("#botao-iniciar");

const botaoProxima =
    document.querySelector("#botao-proxima");

const botaoJogarNovamente =
    document.querySelector("#botao-jogar-novamente");


const tituloMissao =
    document.querySelector("#titulo-missao");

const numeroPergunta =
    document.querySelector("#numero-pergunta");

const pergunta =
    document.querySelector("#pergunta");

const opcoes =
    document.querySelector("#opcoes");

const resultado =
    document.querySelector("#resultado");

const mensagemFinal =
    document.querySelector("#mensagem-final");

const afirmacaoFinal =
    document.querySelector("#afirmacao-final");


// ==============================
// ESCOLHER NOME
// ==============================

function escolherNome() {

    const indice =
        Math.floor(Math.random() * nomes.length);

    return nomes[indice];
}


// ==============================
// ESCOLHER AFIRMAÇÃO
// ==============================

function escolherAfirmacao() {

    const indice =
        Math.floor(Math.random() * afirmacoes.length);

    return afirmacoes[indice];
}


// ==============================
// INICIAR JOGO
// ==============================

function iniciarJogo() {

    perguntaAtual = 0;

    pontuacao = 0;

    telaInicial.classList.add("escondido");

    telaFinal.classList.add("escondido");

    telaJogo.classList.remove("escondido");

    mostrarPergunta();
}


// ==============================
// MOSTRAR PERGUNTA
// ==============================

function mostrarPergunta() {

    const nome = escolherNome();

    const afirmacao = escolherAfirmacao();


    // Exemplo de replace()
    tituloMissao.textContent =
        `Em 2049, ${nome} ${afirmacao}`;


    numeroPergunta.textContent =
        `Pergunta ${perguntaAtual + 1} de ${perguntas.length}`;


    const perguntaAtualObjeto =
        perguntas[perguntaAtual];


    pergunta.textContent =
        perguntaAtualObjeto.pergunta;


    opcoes.innerHTML = "";


    resultado.textContent = "";

    botaoProxima.classList.add("escondido");


    perguntaAtualObjeto.opcoes.forEach(
        (opcao, indice) => {

            const botao =
                document.createElement("button");


            botao.textContent = opcao;


            botao.classList.add(
                "botao-opcao"
            );


            botao.addEventListener(
                "click",
                () => {

                    verificarResposta(indice);

                }
            );


            opcoes.appendChild(botao);
        }
    );
}


// ==============================
// VERIFICAR RESPOSTA
// ==============================

function verificarResposta(indiceEscolhido) {

    const perguntaAtualObjeto =
        perguntas[perguntaAtual];


    const botoes =
        document.querySelectorAll(
            ".botao-opcao"
        );


    // Impede clicar várias vezes
    botoes.forEach(botao => {

        botao.disabled = true;

    });


    if (
        indiceEscolhido ===
        perguntaAtualObjeto.correta
    ) {

        resultado.textContent =
            "✅ Resposta correta!";

        resultado.style.color =
            "#16a34a";


        pontuacao++;

    } else {

        resultado.textContent =
            "❌ Resposta incorreta!";

        resultado.style.color =
            "#dc2626";
    }


    botaoProxima.classList.remove(
        "escondido"
    );
}


// ==============================
// PRÓXIMA PERGUNTA
// ==============================

function proximaPergunta() {

    perguntaAtual++;


    if (
        perguntaAtual <
        perguntas.length
    ) {

        mostrarPergunta();

    } else {

        finalizarJogo();
    }
}


// ==============================
// FINALIZAR JOGO
// ==============================

function finalizarJogo() {

    telaJogo.classList.add(
        "escondido"
    );

    telaFinal.classList.remove(
        "escondido"
    );


    mensagemFinal.textContent =
        `Você acertou ${pontuacao} de ${perguntas.length} perguntas!`;


    const afirmacao =
        escolherAfirmacao();


    afirmacaoFinal.textContent =
        `Em 2049, você ${afirmacao}`;
}


// ==============================
// EVENTOS DOS BOTÕES
// ==============================

botaoIniciar.addEventListener(
    "click",
    iniciarJogo
);


botaoProxima.addEventListener(
    "click",
    proximaPergunta
);


botaoJogarNovamente.addEventListener(
    "click",
    iniciarJogo
);
