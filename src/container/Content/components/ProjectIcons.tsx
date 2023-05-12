import { IoIosGlobe, IoLogoGithub } from 'react-icons/io';
import Links from '../../../components/Links';
import * as Styled from '../styles';
import { ProjectIconsProps } from '../../../types/content';

export default function ProjectIcons({
  github,
  githuback,
  website,
  isProject = true,
}: ProjectIconsProps) {
  return (
    <Styled.Socials isProject={isProject}>
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
      {githuback ? (
        <Styled.MediaComponent>
          <Links link={githuback} newTab={true}>
            <IoLogoGithub size={24} />
            <span>Check the Github for the backend repository</span>
          </Links>
        </Styled.MediaComponent>
      ) : null}
    </Styled.Socials>
  );
}
