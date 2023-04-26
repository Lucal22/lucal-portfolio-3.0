import Container from '../../components/Container';
import * as Styled from './styles';
import { motion } from 'framer-motion';
import Description from './components/Description';
import Images from '../../components/Images';
import images from '../../assets/index';
import Links from '../../components/Links';
import { Envelope, LinkedinLogo, Note } from 'phosphor-react';
import { IoLogoGithub } from 'react-icons/io';

export type AboutProps = Styled.AboutStyleProps;

export default function About() {
  return (
    <Styled.Container>
      <Container height={'full'} background={'dark'}>
        <Styled.Content>
          <Styled.Figure>
            <Images src={images.luis} width={'100%'} alt={'Luis picture'} />
          </Styled.Figure>
          <Styled.Description
            as={motion.div}
            animate={{ y: [50, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <Description />
          </Styled.Description>
          <Styled.Socials>
            <Styled.MediaComponent>
              <Links link="https://github.com/Lucal22" newTab={true}>
                <IoLogoGithub size={24} />
                <span>Follow on Github</span>
              </Links>
            </Styled.MediaComponent>
            <Styled.MediaComponent>
              <Links link="https://shorturl.at/flxyS" newTab={true}>
                <Note size={24} />
                <span>Check my CV</span>
              </Links>
            </Styled.MediaComponent>
            <Styled.MediaComponent>
              <Links
                link="https://www.linkedin.com/in/lu%C3%ADs-carlos-723a28165/"
                newTab={true}
              >
                <LinkedinLogo size={24} weight="light" />
                <span>Follow on Linkedin</span>
              </Links>
            </Styled.MediaComponent>
            <Styled.MediaComponent>
              <Styled.Button
                aria-label="Copy email"
                onClick={async () => {
                  await navigator.clipboard.writeText(
                    'luiscsilvestre22@gmail.com',
                  );
                  alert('Email copied');
                }}
              >
                <Envelope size={24} weight="light" />
                <span>Send an email</span>
              </Styled.Button>
            </Styled.MediaComponent>
          </Styled.Socials>
        </Styled.Content>
      </Container>
    </Styled.Container>
  );
}
