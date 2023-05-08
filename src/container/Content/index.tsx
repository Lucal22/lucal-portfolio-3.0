import Container from '../../components/Container';
import * as Styled from './styles';
import { motion } from 'framer-motion';
import Description from './components/Description';
import Images from '../../components/Images';
import AboutIcons from './components/AboutIcons';
import ProjectIcons from './components/ProjectIcons';
import { ContentProps } from '../../types/content';

export default function Content({
  isProject = true,
  title,
  content,
  url,
  alt,
  website,
  github,
}: ContentProps) {
  return (
    <Styled.Container>
      <Container height={'full'} background={'dark'}>
        <Styled.Content isProject={isProject}>
          <Styled.Figure isProject={isProject}>
            <Images src={url} width={'100%'} alt={alt} />
          </Styled.Figure>
          <Styled.Description
            as={motion.div}
            animate={{ y: [50, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <Description title={title} content={content} />
            {isProject ? (
              <Styled.Techs>
                <Styled.Topics>Stacks</Styled.Topics>
                <Styled.Topics>Libs</Styled.Topics>
              </Styled.Techs>
            ) : null}
          </Styled.Description>
          {isProject ? (
            <ProjectIcons
              isProject={isProject}
              github={github}
              website={website}
            />
          ) : (
            <AboutIcons />
          )}
        </Styled.Content>
      </Container>
    </Styled.Container>
  );
}
