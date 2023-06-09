import styled, { css } from 'styled-components';

export const Home = styled.div`
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const Presentation = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    max-width: 90rem;
    max-height: 23rem;
    padding: 5rem 0.5rem;
    justify-content: center;
    border: 2px solid ${theme.colors.grayColor};

    figure {
      display: block;
      position: absolute;
      margin-top: -12rem;
      border-radius: 50%;
      border: 2px solid ${theme.colors.grayColor};
      width: 12rem;
      height: 12rem;
      @media (min-width: ${theme.screen.size.small}) {
        margin-top: -14rem;
        width: 15rem;
        height: 15rem;
      }

      img {
        border-radius: 50%;
        object-fit: cover;
        object-position: bottom;
      }
    }
  `}
`;

export const Description = styled.div`
  ${({ theme }) => css`
    margin-top: 1.5rem;
    h1,
    h2 {
      font-size: ${theme.fonts.size.big};
      text-align: center;
    }
    h1 {
      @media (min-width: ${theme.screen.size.small}) {
        font-size: ${theme.fonts.size.xBig};
        padding-top: 1rem;
        padding-bottom: 1rem;
      }
      @media (min-width: ${theme.screen.size.medium}) {
        font-size: ${theme.fonts.size.large};
        padding-top: 1rem;
        padding-bottom: 1rem;
      }
    }
  `}
`;

export const Media = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 1.5rem;
  gap: 1rem;
  a {
    cursor: pointer;
  }
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  color: white;
  cursor: pointer;
`;
