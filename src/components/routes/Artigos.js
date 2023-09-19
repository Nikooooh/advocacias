import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import empresarial from "../../imagens/empresarial.webp";
import direitos from "../../imagens/direito.webp";
import trabalhista from "../../imagens/trabalhista.webp";
import humanos from "../../imagens/humanos.webp";
import aposentadoria from "../../imagens/aposentadoria.webp";
import aposentadoria2 from "../../imagens/aposentadoria2.webp";
import empresa from "../../imagens/empresas.webp";
import calendario from "../../imagens/calendario.webp";

const artigos = [
  {
    id: 1,
    imagem: empresarial,
    titulo: "Entendendo o Direito Empresarial",
    resumo:
      "Uma visão geral do direito empresarial e suas implicações práticas.",
    data: "25 de Agosto, 2023",
    conteudoCompleto: "Texto completo do artigo de Direito Empresarial",
  },
  {
    id: 2,
    imagem: humanos,
    titulo: "Direitos Humanos no século XXI",
    resumo: "Desafios e triunfos na busca pela justiça social e equidade.",
    data: "10 de Julho, 2023",
    conteudoCompleto: "Texto completo do artigo de Direitos Humanos",
  },
  {
    id: 3,
    imagem: trabalhista,
    titulo: "Navegando pelo Direito Digital",
    resumo: "Como a legislação acompanha a era digital e seus desafios.",
    data: "5 de Setembro, 2023",
    conteudoCompleto:
      "O Direito Digital é um campo emergente que se concentra em regulamentar e orientar os assuntos que emergem do uso da tecnologia. Com o avanço tecnológico, tornou-se essencial estabelecer regras claras para proteger os direitos dos usuários, a propriedade intelectual e garantir a privacidade e segurança online.",
  },
  {
    id: 4,
    imagem: direitos,
    titulo: "Defendendo o Direito do Consumidor",
    resumo:
      "Entenda a proteção oferecida aos consumidores e suas responsabilidades.",
    data: "17 de Agosto, 2023",
    conteudoCompleto:
      "O Direito do Consumidor se refere ao conjunto de normas que protegem o indivíduo nas relações de consumo, equilibrando a relação entre consumidores e fornecedores, e garantindo que os direitos básicos do consumidor sejam respeitados e protegidos.",
  },
  {
    id: 5,
    imagem: trabalhista,
    titulo: "Os pilares do Direito Civil",
    resumo:
      "Explorando os fundamentos e aplicações do Direito Civil em nossa sociedade.",
    data: "3 de Julho, 2023",
    conteudoCompleto:
      "O Direito Civil é uma das principais ramificações do Direito em qualquer sociedade, lidando com as relações entre os indivíduos e as entidades. Ele abrange uma variedade de subcampos, incluindo contratos, propriedade, família e responsabilidade civil.",
  },
  {
    id: 6,
    imagem: empresarial,
    titulo: "A evolução do Direito do Trabalhador",
    resumo:
      "Do início da industrialização aos desafios atuais do mercado de trabalho.",
    data: "3 de Setembro, 2023",
    conteudoCompleto:
      "O Direito do Trabalhador busca equilibrar a relação entre empregadores e empregados, estabelecendo direitos e deveres para ambas as partes. Ele se adaptou ao longo do tempo para refletir as mudanças nas relações de trabalho, desde a revolução industrial até os desafios contemporâneos como o trabalho remoto e o gig economy.",
  },
  {
    id: 7,
    imagem: aposentadoria,
    titulo: "Desvendando a Aposentadoria por Invalidez",
    resumo:
      "Compreendendo o que é, os requisitos e benefícios da aposentadoria por invalidez.",
    data: "29 de Agosto, 2023",
    conteudoCompleto:
      "A Aposentadoria por Invalidez é um benefício concedido aos trabalhadores que, por uma doença ou acidente, encontram-se permanentemente incapacitados para qualquer trabalho. Este artigo explora os critérios, a forma de cálculo e os aspectos legais envolvidos neste tipo de aposentadoria.",
  },
  {
    id: 8,
    imagem: aposentadoria2,
    titulo: "Aposentadoria: O que você precisa saber",
    resumo:
      "Uma análise completa sobre as diferentes modalidades de aposentadoria e seus requisitos.",
    data: "15 de Agosto, 2023",
    conteudoCompleto:
      "A aposentadoria é um direito do trabalhador após anos de contribuição. Existem diferentes formas de aposentadoria, como por idade, por tempo de contribuição e por invalidez. Este artigo visa esclarecer dúvidas comuns e ajudá-lo a planejar um futuro seguro.",
  },
  {
    id: 9,
    imagem: calendario,
    titulo: "Quando posso me aposentar?",
    resumo:
      "Descubra os critérios e faça um planejamento para sua aposentadoria.",
    data: "5 de Setembro, 2023",
    conteudoCompleto:
      "Determinar o momento certo para a aposentadoria envolve vários fatores, como idade mínima, tempo de contribuição e, em alguns casos, natureza do trabalho. Neste artigo, abordaremos as regras atuais e forneceremos dicas para ajudá-lo a tomar essa decisão importante.",
  },
  {
    id: 10,
    imagem: empresa,
    titulo: "Quando posso processar uma empresa?",
    resumo:
      "Conheça seus direitos e entenda em quais situações você pode buscar reparação legal contra uma empresa.",
    data: "11 de Setembro, 2023",
    conteudoCompleto:
      "Empresas têm a obrigação de respeitar leis e regulamentos, fornecendo produtos e serviços de qualidade e mantendo relações justas com funcionários e clientes. Quando essas obrigações não são cumpridas, pode haver fundamentos para ação legal. Este artigo explora as situações comuns em que você pode considerar processar uma empresa e o que considerar antes de iniciar uma ação.",
  },
];

function Artigos() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 py-">
      <div className="max-w-5xl mx-auto px-4 md:px-0">
        <h1 className="text-4xl font-semibold mt-8 text-center text-054d2a">
          Fique por dentro do mundo jurídico!
        </h1>

        <h2 className="text-3xl font-semibold mt-16 mb-8 text-center text-054d2a">
          Artigos Recentes
        </h2>

        <div className=" mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {artigos.map((artigo, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg border-2 border-dfb76e"
            >
              <img
                src={artigo.imagem}
                alt={artigo.titulo}
                className="w-full h-40 object-cover rounded-t-xl mb-4"
              />
              <h3 className="text-xl font-semibold mb-3 text-054d2a">
                {artigo.titulo}
              </h3>
              <p className="mb-2 text-gray-600">{artigo.resumo}</p>
              <p className="text-sm text-gray-500 italic">{artigo.data}</p>
              <Link
                to={`/artigos/${artigo.id}`}
                className="mt-4 inline-block bg-blue-600 text-white rounded-full px-8 py-2 hover:bg-blue-700 transition duration-200"
              >
                Ler mais
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Outlet />
      <Footer />
    </div>
  );
}

export default Artigos;
