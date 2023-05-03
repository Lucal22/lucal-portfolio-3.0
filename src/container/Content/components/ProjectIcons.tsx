import { IoIosGlobe, IoLogoGithub } from 'react-icons/io';
import Links from '../../../components/Links';
import * as Styled from '../styles';
import { ProjectIconsProps } from '../../../types/content';

export default function ProjectIcons({ github, website }: ProjectIconsProps) {
  return (
    <Styled.Socials>
      {website ? (
        <Styled.MediaComponent>
          <Links link={website} newTab={true}>
            <IoIosGlobe size={24} />
            <span>Check the Website deploy</span>
          </Links>
        </Styled.MediaComponent>
      ) : null}
      <Styled.MediaComponent>
        <Links link={github} newTab={true}>
          <IoLogoGithub size={24} />
          <span>Check the Github repository</span>
        </Links>
      </Styled.MediaComponent>
    </Styled.Socials>
  );
}
