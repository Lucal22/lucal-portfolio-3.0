import Container from '../../components/Container';
import * as Styled from './styles';
import { motion } from 'framer-motion';
import Description from './components/Description';
import Images from '../../components/Images';
import AboutIcons from './components/AboutIcons';
import ProjectIcons from './components/ProjectIcons';
import { ContentProps } from '../../types/content';
import { ArrowCircleLeft } from 'phosphor-react';

export default function Content({
  isProject = true,
  title,
  content,
  url,
  alt,
  website,
  github,
  githuback,
  stack,
  libs,
}: ContentProps) {
  return (
    <Styled.Container>
      <Container height={'full'} background={'dark'}>
        <Styled.Content>
          <Styled.Grid isProject={isProject}>
            <Styled.Back href="/projects">
              <ArrowCircleLeft size={48} />
            </Styled.Back>
            <Styled.Figure isProject={isProject}>
              <Images src={url} width={'100%'} alt={alt} />
            </Styled.Figure>
            <Styled.Description
              as={motion.div}
              animate={{ y: [50, 0] }}
              transition={{ duration: 0.85, ease: 'easeOut' }}
            >
              <Description
                isProject={isProject}
                title={title}
                content={content}
                libs={libs}
                stack={stack}
              />
            </Styled.Description>
            {isProject ? (
              <ProjectIcons
                isProject={isProject}
                github={github}
                githuback={githuback}
                website={website}
              />
            ) : (
              <AboutIcons />
            )}
          </Styled.Grid>
        </Styled.Content>
      </Container>
    </Styled.Container>
  );
}
