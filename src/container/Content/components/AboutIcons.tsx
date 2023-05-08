import { IoLogoGithub } from 'react-icons/io';
import Links from '../../../components/Links';
import * as Styled from '../styles';
import { Envelope, LinkedinLogo, Note } from 'phosphor-react';

export default function AboutIcons() {
  return (
    <Styled.Socials isProject={false}>
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
            await navigator.clipboard.writeText('luiscsilvestre22@gmail.com');
            alert('Email copied');
          }}
        >
          <Envelope size={24} weight="light" />
          <span>luiscsilvestre22@gmail.com</span>
        </Styled.Button>
      </Styled.MediaComponent>
    </Styled.Socials>
  );
}
