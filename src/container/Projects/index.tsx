import Container from '../../components/Container';
import images from '../../assets/index';

import Card from './components/Card';
import * as Styled from './styles';

export default function Projects() {
  return (
    <Styled.Container>
      <Container height={'full'} background="dark">
        <Styled.Content>
          <Card
            img={images.agenda}
            alt={'agenda'}
            title={'agenda'}
            description={
              'descrição do projeto agenda como teste agenda como teste agenda como teste'
            }
            path={''}
          />
          <Card
            img={images.agenda}
            alt={'agenda'}
            title={'agenda'}
            description={'descrição do projeto agenda como teste'}
            path={''}
          />
          <Card
            img={images.agenda}
            alt={'agenda'}
            title={'agenda'}
            description={'descrição do projeto agenda como teste'}
            path={''}
          />
          <Card
            img={images.agenda}
            alt={'agenda'}
            title={'agenda'}
            description={'descrição do projeto agenda como teste'}
            path={''}
          />
        </Styled.Content>
      </Container>
    </Styled.Container>
  );
}
