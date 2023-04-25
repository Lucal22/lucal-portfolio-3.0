import * as Styled from '../styles';

export default function Description() {
  return (
    <>
      <Styled.SubTitle>
        Meu nome é Luís Carlos, tenho 26 anos e um grande interesse por
        tecnologia.
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
        {/* <Styled.Tech>
          {techIcons.map((icons, index) => {
            return icons.image ? (
              <Images
                key={index}
                src={icons.image}
                alt={icons.alt}
                width={60}
                height={60}
              />
            ) : null;
          })}
        </Styled.Tech> */}
      </Styled.Paragraph>
      <Styled.Paragraph>
        {/* <Styled.Tech>
          {techIconsRight.map((icons, index) => {
            return icons.image ? (
              <Images
                key={index}
                src={icons.image}
                alt={icons.alt}
                width={60}
                height={60}
              />
            ) : null;
          })}
        </Styled.Tech> */}
        E em 2022 tenho estudado e desenvolvido projetos utilizando frameworks
        como <span>React.js, Next.js e Typescript</span> para o frontend e
        Node.js para backend além de procurar outras alternativas para
        estilização como <span>Tailwind CSS, Styled Components e SASS.</span>
      </Styled.Paragraph>
    </>
  );
}
