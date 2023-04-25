import Container from '../../components/Container';
import * as Styled from './styles';
import AboutMe from './components/AboutMe';
import Graduation from './components/Graduation';
import Tech from './components/Tech';
import { motion } from 'framer-motion';

export type AboutProps = Styled.AboutStyleProps;

export default function About() {
  return (
    <Styled.Container>
      <Container height={'full'} background={'dark'}>
        <Styled.Content>
          <Styled.Description
            as={motion.div}
            animate={{ y: [50, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <AboutMe />
            <Graduation />
            <Tech />
          </Styled.Description>
        </Styled.Content>
      </Container>
    </Styled.Container>
  );
}
