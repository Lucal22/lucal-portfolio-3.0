import * as Styled from '../styles';

export default function Description() {
  return (
    <>
      <Styled.SubTitle>
        {`
        I'm Luís Carlos, a software developer from Brazil graduated
        in electrical engineering.`}
      </Styled.SubTitle>
      <Styled.Paragraph>
        Sou de Conselheiro Lafaiete, Minas Gerais e no momento estou a procura
        de uma oportunidade como desenvolvedor web.
      </Styled.Paragraph>
      <Styled.Paragraph>
        Alguns dos meus hobbies são assistir séries e filmes, ir ao cinema,
        jogos online e pelo último ano está sendo programar.
      </Styled.Paragraph>
      <Styled.Paragraph>
        Em maio de 2021 decidi aprender mais sobre programação e então comecei
        os meus estudos primeiramente com <span>HTML, CSS e JavaScript,</span>{' '}
        através de cursos, documentação e praticando.
      </Styled.Paragraph>
      <Styled.Paragraph>
        E em 2022 tenho estudado e desenvolvido projetos utilizando frameworks
        como <span>React.js, Next.js e Typescript</span> para o frontend e
        Node.js para backend além de procurar outras alternativas para
        estilização como <span>Tailwind CSS, Styled Components e SASS.</span>
      </Styled.Paragraph>
    </>
  );
}
