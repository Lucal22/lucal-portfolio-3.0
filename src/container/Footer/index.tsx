import * as Styled from './styles';
import Container from '../../components/Container';

export default function Footer() {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <Styled.Container>
      <Container height={'100'} background="dark">
        <Styled.Content>
          <p>Copyright © {year}</p>
          <p>
            Made by{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Lucal22"
            >
              Lucal
            </a>
          </p>
        </Styled.Content>
      </Container>
    </Styled.Container>
  );
}
