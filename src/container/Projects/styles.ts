import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  color: ${theme.colors.whiteColor};
`;

export const Content = styled.div`
  padding-top: 9rem;
  @media (min-width: ${theme.screen.size.medium}) {
    padding-top: 15rem;
  } ;
`;
