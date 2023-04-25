import React from 'react';
import Nav from './components/Nav';
import * as Styled from './styles';

export type HeaderProps = {
  children: React.ReactNode;
};

export default function Header() {
  return (
    <Styled.Header>
      <Nav />
    </Styled.Header>
  );
}
