import React from "react";

function TermsOfUsePage() {
  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-100 p-4 md:pt-16 lg:pt-22">
      <div className="bg-white p-8 rounded shadow-md w-full md:w-3/4 lg:w-2/3">
        <h2 className="text-2xl font-bold mb-5">Termos de Uso</h2>

        <h3 className="text-xl font-semibold mb-3">1. Introdução</h3>
        <p>
          Ao usar nosso site e se cadastrar, você concorda com os seguintes
          termos e condições, que podem ser alterados a qualquer momento sem
          aviso prévio.
        </p>

        <br />
        <h3 className="text-xl font-semibold mb-3">2. Informações Pessoais</h3>
        <p>
          Ao se registrar, você concorda em fornecer informações verdadeiras e
          atualizadas. Você é o único responsável pela precisão e conteúdo das
          informações fornecidas. Qualquer informação falsa pode resultar na
          suspensão ou encerramento da sua conta.
        </p>
        <p>
          Estamos comprometidos em proteger a privacidade das suas informações.
          No entanto, nos reservamos o direito de divulgar essas informações
          conforme exigido por lei e quando acreditamos que a divulgação é
          necessária para proteger nossos direitos ou para cumprir um processo
          judicial, ordem judicial ou processo legal servido em nosso site.
        </p>

        <br />
        <h3 className="text-xl font-semibold mb-3">3. Uso do Conteúdo</h3>
        <p>
          Todo o conteúdo deste site, incluindo, mas não se limitando a,
          imagens, nome, informações de contato e outros detalhes, é propriedade
          exclusiva do site ou de seus respectivos proprietários. A cópia,
          redistribuição, uso ou publicação por você de qualquer parte do site
          ou seu conteúdo é estritamente proibida.
        </p>
        <p>
          Os advogados ou escritórios que fornecem seu conteúdo para o site
          garantem que possuem todos os direitos necessários sobre o conteúdo
          fornecido e que não estão infringindo ou violando os direitos de
          terceiros ao compartilhar esse conteúdo.
        </p>

        <br />
        <h3 className="text-xl font-semibold mb-3">
          4. Limitação de Responsabilidade
        </h3>
        <p>
          Não somos responsáveis por qualquer dano direto, indireto, especial,
          incidental ou consequente decorrente do uso ou da incapacidade de usar
          o site ou os serviços associados. Isso inclui, mas não se limita a,
          qualquer perda de negócios, lucros perdidos, interrupção de negócios,
          perda de dados ou outras perdas intangíveis.
        </p>

        <br />
        <h3 className="text-xl font-semibold mb-3">
          5. Alterações nos Termos de Uso
        </h3>
        <p>
          Nos reservamos o direito de modificar ou revisar os termos de uso a
          qualquer momento, por isso é aconselhável revisar periodicamente esta
          página para garantir que você esteja ciente de qualquer alteração. O
          uso contínuo do site após tais modificações indica sua aceitação e
          concordância com as revisões.
        </p>

        <p className="mt-5">
          Recomendamos que leia todos os termos cuidadosamente antes de usar
          nosso site e se registrar.
        </p>
      </div>
    </div>
  );
}

export default TermsOfUsePage;
