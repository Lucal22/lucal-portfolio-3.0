import styled, { css } from 'styled-components';

export type AboutStyleProps = {
  click: boolean;
};

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    background-color: ${theme.background.black};
  `}
`;

export const Content = styled.div``;

export const Description = styled.div`
  ${({ theme }) => css`
    @media (min-width: ${theme.screen.size.medium}) {
      width: 80%;
      margin: 0 auto;
      padding-top: 3rem;
    } ;
  `}
`;

export const Paragraph = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.whiteColor};

    font-size: ${theme.fonts.size.small};
    font-weight: 400;
    text-align: justify;

    span {
      color: ${theme.colors.whiteColor};
      background: ${theme.colors.greenColor};
    }

    img {
      min-width: 6.7rem;
    }

    @media (min-width: ${theme.screen.size.medium}) {
      font-size: ${theme.fonts.size.medium};

      img {
        min-width: 10rem;
      }
    }

    @media (min-width: ${theme.screen.size.large}) {
      font-size: ${theme.fonts.size.big};

      img {
        min-width: 15rem;
      }
    }
  `}
`;

export const Tech = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 4rem 4rem;
    gap: 2rem;
    img {
      min-width: 4rem;
    }
    @media (min-width: ${theme.screen.size.large}) {
      img {
        min-width: 6rem;
      }
      grid-template-columns: 6rem 6rem;
    }
  `}
`;

export const DefaultText = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.grayColor};
    padding-top: 10rem;
    text-align: center;
  `}
`;
