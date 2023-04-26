import Container from '../../components/Container';
import * as Styled from './styles';
import { motion } from 'framer-motion';
import Description from './components/Description';
import Images from '../../components/Images';
import images from '../../assets/index';

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
          <Styled.Socials>Social medias</Styled.Socials>
        </Styled.Content>
      </Container>
    </Styled.Container>
  );
}
