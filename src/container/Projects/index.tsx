import React from 'react';
import Container from '../../components/Container';
import * as Styled from './styles';

export type ProjectsProps = {
  children: React.ReactNode;
};

export default function Projects() {
  return (
    <Styled.Container>
      <Container height={'full'} background="dark">
        <Styled.Content></Styled.Content>
      </Container>
    </Styled.Container>
  );
}
