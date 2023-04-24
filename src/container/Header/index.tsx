import React from 'react';
import Menu from '../../components/Menu';
import Nav from '../../components/Nav';
import * as Styled from './styles';

export type HeaderProps = {
  children: React.ReactNode;
};

export default function Header() {
  return (
    <Styled.Header>
      <Nav />
      <Menu />
    </Styled.Header>
  );
}
