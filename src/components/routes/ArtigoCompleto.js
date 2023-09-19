import React from "react";
import { Link, useParams } from "react-router-dom";

const artigos = [
  {
    id: 1,
    titulo: "Direito Empresarial: Entenda sua Importância e Atuação",
    resumo:
      "Uma análise aprofundada sobre o Direito Empresarial e suas implicações no mundo dos negócios.",
    data: "25 de Agosto, 2023",
    conteudoCompleto:
      "O Direito Empresarial, frequentemente referido como Direito Comercial, é uma especialidade do direito que abrange a legislação relacionada às empresas e ao comércio. Seu papel primordial é regular e fiscalizar a atividade empresarial, abrangendo campos como o comércio, a indústria e os serviços. Por meio de normas e princípios, o Direito Empresarial garante que as práticas comerciais sejam justas e transparentes, proporcionando um ambiente seguro e propício para os negócios. Ao entender o que é o Direito Empresarial, empresários e profissionais têm uma ferramenta valiosa para navegar no complexo mundo corporativo, garantindo a conformidade e proteção de seus interesses.",
  },

  {
    id: 2,
    titulo: "Direitos Humanos: A Luta Contínua por Justiça e Equidade",
    resumo:
      "Um olhar detalhado sobre os Direitos Humanos e sua essencialidade na promoção da justiça e equidade globais.",
    data: "10 de Julho, 2023",
    conteudoCompleto:
      "Os Direitos Humanos são princípios fundamentais reconhecidos internacionalmente que garantem a dignidade, liberdade e igualdade de todos os seres humanos. Estes direitos, universais e inalienáveis, servem como o pilar fundamental para construir sociedades justas e equitativas. Eles abrangem direitos civis, políticos, econômicos, sociais e culturais, e sua promoção e proteção são essenciais para garantir a paz e o desenvolvimento sustentável. No mundo contemporâneo, embora tenhamos feito progressos significativos, muitos ainda enfrentam violações desses direitos. A compreensão e defesa ativa dos Direitos Humanos são vitais para enfrentar os desafios do século XXI e criar um mundo mais justo para todos.",
  },

  {
    id: 3,
    titulo: "Direito Digital: Regulamentando a Fronteira Tecnológica",
    resumo:
      "Descubra como o Direito Digital molda e protege nosso mundo conectado.",
    data: "5 de Setembro, 2023",
    conteudoCompleto:
      "A era digital trouxe consigo inovações e desafios sem precedentes. O Direito Digital, uma área do direito em rápida evolução, busca abordar as questões legais que surgem com essas mudanças tecnológicas. Desde a proteção de dados pessoais até o combate a crimes cibernéticos, o Direito Digital estabelece normas e diretrizes para garantir que a tecnologia seja usada de maneira ética e responsável. Além disso, com a crescente integração da tecnologia em nossas vidas diárias, torna-se imperativo garantir os direitos e liberdades dos usuários no espaço digital. Portanto, tanto para profissionais do direito quanto para entusiastas da tecnologia, entender o Direito Digital é crucial para navegar com confiança no cenário digital moderno.",
  },

  {
    id: 4,
    titulo: "A Importância do Direito do Consumidor na Era Moderna",
    resumo:
      "Compreendendo a relevância da legislação protetiva na relação entre empresas e clientes.",
    data: "17 de Agosto, 2023",
    conteudoCompleto:
      "O Direito do Consumidor é o guardião das relações de consumo, assegurando que sejam pautadas em ética, transparência e justiça. A legislação consumerista, ao longo dos anos, evoluiu para proteger consumidores de práticas desleais e enganosas, equilibrando a balança na relação com fornecedores e prestadores de serviços. Na era da informação e do comércio eletrônico, a proteção ao consumidor ganhou ainda mais relevância, lidando com questões como compras online, publicidade digital e direitos de arrependimento. Toda pessoa que se engaja em atividades de compra ou venda deve ter uma compreensão sólida do Direito do Consumidor para garantir que seus direitos sejam sempre respeitados e suas responsabilidades bem definidas.",
  },

  {
    id: 5,
    titulo: "Direito Civil: A Espinha Dorsal das Relações Privadas",
    resumo:
      "Navegando pelas nuances do Direito Civil e seu impacto em nosso cotidiano.",
    data: "3 de Julho, 2023",
    conteudoCompleto:
      "O Direito Civil é frequentemente considerado a espinha dorsal da legislação, dada a amplitude de assuntos que abrange. Ele estabelece o quadro para a maioria das relações privadas, de contratos a propriedades, de questões familiares a obrigações pessoais. O Direito Civil também estabelece os direitos e deveres dos cidadãos em relação uns aos outros, criando um sistema onde conflitos podem ser resolvidos de forma justa e eficiente. Para advogados, acadêmicos e até mesmo para o cidadão comum, o Direito Civil é uma área indispensável de estudo e compreensão, fornecendo a base para muitos aspectos de nossa vida diária e interações sociais.",
  },

  {
    id: 6,
    titulo: "Direito do Trabalho: Salvaguardando os Direitos dos Trabalhadores",
    resumo:
      "Desde a Revolução Industrial até os desafios modernos: a trajetória do Direito do Trabalho.",
    data: "22 de Setembro, 2023",
    conteudoCompleto:
      "A evolução do Direito do Trabalho reflete as mudanças contínuas nas relações de trabalho ao longo dos séculos. Originado em resposta às condições muitas vezes desumanas da Revolução Industrial, este ramo do direito cresceu e adaptou-se para proteger os direitos e interesses dos trabalhadores em um ambiente de trabalho em constante mudança. Hoje, com desafios como a economia gig, trabalho remoto e automação, o Direito do Trabalho é mais vital do que nunca. Ele não só estabelece normas para salários, horas de trabalho e condições de segurança, mas também garante que os trabalhadores sejam tratados com dignidade e justiça em um mercado de trabalho em rápida evolução. Para trabalhadores, empregadores e profissionais do direito, é fundamental compreender as nuances e importância do Direito do Trabalho na sociedade contemporânea.",
  },
  {
    id: 7,
    titulo: "Aposentadoria por Invalidez: Uma Análise Completa",
    resumo:
      "Descubra os meandros da Aposentadoria por Invalidez e como ela pode impactar a vida dos trabalhadores.",
    data: "29 de Agosto, 2023",
    conteudoCompleto:
      "A Aposentadoria por Invalidez é concedida àqueles que, devido a uma enfermidade ou acidente, tornam-se permanentemente incapazes de exercer qualquer atividade laboral. Não se trata de uma condição temporária, mas de uma incapacidade constante e duradoura. Para ser elegível, o trabalhador deve passar por uma avaliação médica pelo INSS, e, frequentemente, revisões periódicas são necessárias para confirmar a continuidade da condição. Importante frisar que, para ter direito, o trabalhador deve ter contribuído ao INSS antes do início da incapacidade. Entender esse tipo de aposentadoria é essencial, especialmente para aqueles que encontram-se em situações de saúde complicadas.",
  },

  {
    id: 8,
    titulo: "O Guia Definitivo da Aposentadoria",
    resumo:
      "Navegue pelo universo da aposentadoria e descubra como planejar seu futuro com segurança.",
    data: "15 de Agosto, 2023",
    conteudoCompleto:
      "A aposentadoria é uma fase da vida pela qual a maioria dos trabalhadores passará. No entanto, entender as diferentes modalidades de aposentadoria (por idade, por tempo de contribuição, especial, entre outras) pode ser desafiador. Cada modalidade tem seus requisitos específicos em termos de idade mínima e tempo de contribuição. Além disso, a legislação previdenciária está em constante mudança, tornando ainda mais importante estar atualizado sobre o assunto. Planejar a aposentadoria é um passo crucial para garantir uma velhice tranquila e segura. Para isso, é importante não apenas conhecer seus direitos, mas também fazer um planejamento financeiro adequado.",
  },

  {
    id: 9,
    titulo: "Quando é o Momento Certo para se Aposentar?",
    resumo:
      "Um olhar estratégico sobre como decidir o melhor momento para sua aposentadoria.",
    data: "5 de Setembro, 2023",
    conteudoCompleto:
      "A decisão de se aposentar não é apenas baseada em critérios objetivos como idade ou tempo de contribuição. Há também fatores subjetivos, como objetivos de vida, saúde, situação financeira, entre outros. Algumas pessoas optam por se aposentar assim que cumprem os requisitos mínimos, enquanto outras decidem continuar trabalhando por razões pessoais ou financeiras. Além disso, é essencial considerar o cenário econômico, as perspectivas futuras para o sistema previdenciário e seus planos pessoais para a aposentadoria. Portanto, ao se perguntar 'Quando posso me aposentar?', é fundamental fazer uma avaliação holística de sua situação e objetivos de vida.",
  },

  {
    id: 10,
    titulo: "Processando Empresas: Seus Direitos e Como Proceder",
    resumo:
      "Entenda em quais circunstâncias você pode buscar reparação legal contra uma empresa e como dar os primeiros passos.",
    data: "20 de Setembro, 2023",
    conteudoCompleto:
      "O direito de buscar reparação legal é fundamental em uma sociedade democrática. No mundo corporativo, existem situações em que clientes, funcionários ou outros stakeholders podem sentir a necessidade de processar uma empresa. Pode ser devido a práticas comerciais injustas, produtos defeituosos, ambiente de trabalho inseguro, entre outros. Antes de entrar com uma ação, é vital estar bem informado sobre seus direitos, as possíveis consequências e os procedimentos legais envolvidos. É também recomendado procurar aconselhamento jurídico para avaliar a viabilidade e os méritos do caso. Este artigo busca esclarecer o cenário legal, ajudando a tomar decisões informadas sobre quando e como processar uma empresa.",
  },
];

function ArtigoCompleto() {
  const { id } = useParams();
  const artigo = artigos.find((a) => a.id === parseInt(id));
  console.log("Título da URL:", id);

  if (!artigo) {
    console.log(
      "Lista de títulos disponíveis:",
      artigos.map((a) => a.titulo)
    );
    return <div>Artigo não encontrado!</div>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6 mt-12">
      <div className="mb-10"></div>

      <h2 className="text-3xl font-semibold mb-4 text-054d2a">
        {artigo.titulo}
      </h2>
      <p className="text-sm text-gray-500 italic mb-10">{artigo.data}</p>
      <div className="text-gray-700 text-lg leading-tight space-y-4 border-l-4 pl-4 border-054d2a">
        {artigo.conteudoCompleto
          .split("\n")
          .map(
            (paragraph, index) =>
              paragraph.trim() && <p key={index}>{paragraph}</p>
          )}
      </div>

      <div className="mt-10">
        <Link
          to="/artigos"
          className="inline-block bg-gray-800 text-white py-2 px-6 rounded hover:bg-gray-700 transition duration-200"
        >
          Voltar aos artigos
        </Link>
      </div>
    </div>
  );
}

export default ArtigoCompleto;
