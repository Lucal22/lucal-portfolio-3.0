import styled from 'styled-components';
import { theme } from '../../../../styles/theme';

export const Container = styled.div`
  width: 30rem;
  height: 22rem;
  margin: 0 auto;
  margin-top: 4rem;
  cursor: pointer;
  border-radius: 0.5rem;
  &:hover {
    img {
      filter: grayscale(0%);
    }
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
  width: 100%;
  margin: auto;
  img {
    width: 100%;
    object-fit: cover;
    border-radius: 0.5rem;
    filter: grayscale(50%);
  }
`;
