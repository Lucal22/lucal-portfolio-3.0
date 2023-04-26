import styled, { css } from 'styled-components';
import { theme } from '../../styles/theme';

export type AboutStyleProps = {
  click: boolean;
};

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    background-color: ${theme.background.black};
    font-family: ${theme.fonts.style.titleFont};
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-areas:
      'i1 i1'
      'i2 i2'
      'i3 i3';
    padding-top: 12rem;
    @media (min-width: ${theme.screen.size.large}) {
      padding-top: 15rem;
      grid-template-areas:
        'i2 i1'
        'i4 i3';
    } ;
  `}
`;

export const Figure = styled.div`
  grid-area: i1;
  width: 30rem;
  margin: 0 auto;
  img {
    border-radius: 1rem;
    filter: grayscale(90%);
  }
`;

export const Socials = styled.div`
  grid-area: i3;
`;

export const MediaComponent = styled.div`
  a {
    display: flex;
    align-items: center;
  }
  button {
    display: flex;
    align-items: center;
  }
  span {
    padding-left: 1rem;
    font-size: ${theme.fonts.size.xSmall};
  }
  padding-bottom: 1rem;
`;

export const Description = styled.div`
  ${({ theme }) => css`
    grid-area: i2;
    margin-top: 4rem;
    margin-bottom: 2rem;
    @media (min-width: ${theme.screen.size.medium}) {
      width: 80%;
      margin: 0 auto;
      margin-top: 3rem;
    } ;
  `}
`;

export const SubTitle = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.fonts.size.xBig};
    text-align: center;
    margin-bottom: 3.5rem;
  `}
`;

export const Paragraph = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.aboutTextColor};
    font-size: ${theme.fonts.size.small};
    font-weight: 400;
    margin-bottom: 2.5rem;

    span {
      color: ${theme.colors.whiteColor};
    }

    @media (min-width: ${theme.screen.size.medium}) {
      font-size: ${theme.fonts.size.medium};
    }

    @media (min-width: ${theme.screen.size.large}) {
      font-size: ${theme.fonts.size.big};
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

export const Button = styled.button`
  border: none;
  background-color: transparent;
  color: white;
  cursor: pointer;
`;
