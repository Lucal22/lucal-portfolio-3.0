import Container from '../../components/Container';
import * as Styled from './styles';
import { motion } from 'framer-motion';
import Description from './components/Description';

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
            <Description />
          </Styled.Description>
        </Styled.Content>
      </Container>
    </Styled.Container>
  );
}
