import React from 'react';
import Container from '../../components/Container';
import * as Styled from './styles';
import images from '../../assets/index';
import Images from '../../components/Images';
import { LinkedinLogo, Envelope } from 'phosphor-react';
import { IoLogoGithub } from 'react-icons/io';
import Links from '../../components/Links';

export default function HomePage() {
  return (
    <Styled.Home>
      <Container background="dark" height={'full'}>
        <Styled.Content>
          <Styled.Presentation>
            <figure>
              {images.luis ? (
                <Images src={images.luis} width={'100%'} alt={'Luis Carlos'} />
              ) : null}
            </figure>
            <Styled.Description>
              <h1>Luís Carlos S. Silvestre</h1>
              <h2>Software Developer and Electrical Engineer</h2>
              <Styled.Media>
                <Links
                  link="https://www.linkedin.com/in/lu%C3%ADs-carlos-723a28165/"
                  newTab={true}
                >
                  <LinkedinLogo size={32} weight="light" />
                </Links>
                <Styled.Button
                  aria-label="Copy email"
                  onClick={async () => {
                    await navigator.clipboard.writeText(
                      'luiscsilvestre22@gmail.com',
                    );
                    alert('Email copied');
                  }}
                >
                  <Envelope size={32} weight="light" />
                </Styled.Button>
                <Links link="https://github.com/Lucal22" newTab={true}>
                  <IoLogoGithub size={32} />
                </Links>
              </Styled.Media>
            </Styled.Description>
          </Styled.Presentation>
        </Styled.Content>
      </Container>
    </Styled.Home>
  );
}
