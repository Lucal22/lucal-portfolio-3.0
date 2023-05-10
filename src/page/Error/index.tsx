import Container from '../../components/Container';
import * as Styled from './styles';

export default function Error() {
  return (
    <Styled.Container>
      <Container height={'full'} background="dark">
        <Styled.Content>
          <h1>ERROR: Page not found</h1>
        </Styled.Content>
      </Container>
    </Styled.Container>
  );
}
