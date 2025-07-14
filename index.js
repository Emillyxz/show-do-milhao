const readline = require("readline-sync");

const perguntas = [
  {
    pergunta: "Qual é a capital do Brasil?",
    alternativas: ["1) São Paulo", "2) Brasília", "3) Rio de Janeiro"],
    correta: 2,
    premio: 1000
  },
  {
    pergunta: "Quem pintou a Mona Lisa?",
    alternativas: ["1) Van Gogh", "2) Picasso", "3) Leonardo da Vinci"],
    correta: 3,
    premio: 2000
  },
  {
    pergunta: "Qual o menor país do mundo?",
    alternativas: ["1) Vaticano", "2) Mônaco", "3) San Marino"],
    correta: 1,
    premio: 3000
  },
  {
    pergunta: "Em que continente fica o Egito?",
    alternativas: ["1) África", "2) Ásia", "3) Europa"],
    correta: 1,
    premio: 4000
  },
  {
    pergunta: "Quanto é 7 x 8?",
    alternativas: ["1) 54", "2) 56", "3) 64"],
    correta: 2,
    premio: 5000
  },
  {
    pergunta: "Quem escreveu Dom Casmurro?",
    alternativas: ["1) Machado de Assis", "2) José de Alencar", "3) Clarice Lispector"],
    correta: 1,
    premio: 6000
  },
  {
    pergunta: "Qual o maior planeta do Sistema Solar?",
    alternativas: ["1) Saturno", "2) Júpiter", "3) Terra"],
    correta: 2,
    premio: 7000
  },
  {
    pergunta: "Qual é a fórmula da água?",
    alternativas: ["1) H2O", "2) CO2", "3) NaCl"],
    correta: 1,
    premio: 8000
  },
  {
    pergunta: "Quantos segundos há em um minuto?",
    alternativas: ["1) 100", "2) 60", "3) 80"],
    correta: 2,
    premio: 9000
  },
  {
    pergunta: "Qual animal é símbolo da WWF?",
    alternativas: ["1) Urso", "2) Panda", "3) Leão"],
    correta: 2,
    premio: 10000
  },
  {
    pergunta: "Qual país é conhecido como Terra do Sol Nascente?",
    alternativas: ["1) China", "2) Japão", "3) Coreia do Sul"],
    correta: 2,
    premio: 11000
  },
  {
    pergunta: "Quantos lados tem um hexágono?",
    alternativas: ["1) 5", "2) 6", "3) 7"],
    correta: 2,
    premio: 12000
  },
  {
    pergunta: "Quem descobriu o Brasil?",
    alternativas: ["1) Pedro Álvares Cabral", "2) Cristóvão Colombo", "3) Vasco da Gama"],
    correta: 1,
    premio: 13000
  },
  {
    pergunta: "Qual a cor da clorofila?",
    alternativas: ["1) Verde", "2) Vermelha", "3) Azul"],
    correta: 1,
    premio: 14000
  },
  {
    pergunta: "Qual a montanha mais alta do mundo?",
    alternativas: ["1) Everest", "2) Aconcágua", "3) K2"],
    correta: 1,
    premio: 15000
  }
];

function jogar() {
  const nome = readline.question("Digite seu nome: ");
  console.log(`\nBem-vindo ao Show do Milhão, ${nome}!\n`);

  let premioTotal = 0;
  let rodada = 0;

  for (let i = 0; i < 5; i++) {
    const pergunta = perguntas[Math.floor(Math.random() * perguntas.length)];
    rodada++;
    console.log(`\nRodada ${rodada}`);
    console.log(`Se acertar: R$${pergunta.premio}`);
    console.log(`Se errar: R$0`);
    console.log(`Pergunta: ${pergunta.pergunta}`);
    pergunta.alternativas.forEach(alt => console.log(alt));
    
    const resposta = readline.questionInt("Sua resposta (1/2/3): ");

    if (resposta === pergunta.correta) {
      premioTotal += pergunta.premio;
      console.log("Resposta correta!");
    } else {
      console.log(`Resposta errada! A correta era a alternativa ${pergunta.correta}.`);
      console.log(`Você saiu com R$${premioTotal}`);
      break;
    }

    if (i < 4) {
      const continuar = readline.question("Deseja continuar? (s/n): ");
      if (continuar.toLowerCase() !== "s") {
        console.log(`Você parou na rodada ${rodada} com R$${premioTotal}`);
        break;
      }
    }
  }

  console.log(`\nFim de jogo, ${nome}.`);
  console.log(`Premiação Final: R$${premioTotal}`);
  const jogarNovamente = readline.question("Deseja jogar novamente? (s/n): ");
  if (jogarNovamente.toLowerCase() === "s") {
    jogar();
  }
}

jogar();
