import React from 'react';
import * as Styled from './styles';

export type CardProps = {
  children: React.ReactNode;
};

export default function Card({ children }: CardProps) {
  return (
    <Styled.Container>
      <h1>{children}</h1>
    </Styled.Container>
  );
}
