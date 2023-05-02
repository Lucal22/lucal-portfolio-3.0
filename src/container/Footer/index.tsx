import React from 'react';
import * as Styled from './styles';
import Container from '../../components/Container';

export default function Footer() {
  return (
    <Styled.Container>
      <Container height={'100'} background="dark">
        <h1>Footer</h1>
      </Container>
    </Styled.Container>
  );
}
