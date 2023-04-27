import styled from 'styled-components';
import { theme } from '../../../../styles/theme';

export const Container = styled.div`
  width: 30rem;
  height: 22rem;
  margin: 0 auto 4rem auto;
  cursor: pointer;
  border-radius: 0.5rem;
  &:hover {
    background-color: ${theme.colors.grayColor};
  }
`;

export const Description = styled.div`
  margin: 0.5rem;
  h2 {
    font-size: ${theme.fonts.size.small};
    margin-bottom: 0.5rem;
  }
  p {
    font-size: ${theme.fonts.size.xSmall};
    color: ${theme.colors.aboutTextColor};
  }
`;

export const Img = styled.figure`
  width: 95%;
  margin: 1rem auto;
  img {
    width: 100%;
    object-fit: cover;
  }
`;
