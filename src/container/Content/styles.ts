import styled, { css } from 'styled-components';
import { theme } from '../../styles/theme';

export type ContentStyleProps = {
  isProject: boolean;
};

const gridTemplate = {
  project: () => css`
    grid-template-areas:
      'i1 i1'
      'i2 i3';
    grid-template-rows: fit auto;
  `,
  about: () => css`
    grid-template-areas:
      'i2 i1'
      'i2 i3';
    grid-template-rows: 30rem auto;
  `,
};

export const Container = styled.div`
  width: 100%;
  height: 100%;
  font-family: ${theme.fonts.style.titleFont};
`;

export const Content = styled.div<ContentStyleProps>`
  ${({ theme, isProject }) => css`
    display: grid;
    grid-template-areas:
      'i1 i1'
      'i2 i2'
      'i3 i3';
    padding-top: 12rem;

    @media (min-width: ${theme.screen.size.medium}) {
      padding-top: 17rem;
    }

    @media (min-width: ${theme.screen.size.large}) {
      ${isProject ? gridTemplate['project'] : gridTemplate['about']}

      grid-template-columns: 2fr 1fr;
      grid-template-rows: fit auto;
    }

    @media (min-width: ${theme.screen.size.xLarge}) {
      grid-template-rows: 42rem auto;
    } ;
  `}
`;

export const Figure = styled.div<ContentStyleProps>`
  ${({ isProject }) => css`
    grid-area: i1;
    width: 30rem;
    height: 100%;
    margin: 0 auto;
    img {
      border-radius: 1rem;
      filter: ${isProject ? 'none' : 'grayscale(90%)'};
    }
    @media (min-width: ${theme.screen.size.medium}) {
      margin: 0 ${isProject ? 'auto' : ''};
      width: ${isProject ? '50rem' : '30rem'};
    }
    @media (min-width: ${theme.screen.size.large}) {
      width: ${isProject ? '60rem' : 'auto'};
    }
    @media (min-width: ${theme.screen.size.xLarge}) {
      width: ${isProject ? '80rem' : 'auto'};
    }
  `}
`;

export const Socials = styled.div<ContentStyleProps>`
  ${({ isProject }) => css`
    grid-area: i3;
    margin-top: ${isProject ? '3rem' : 'none'};
  `}
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
  grid-area: i2;
  margin-top: 4rem;
  margin-bottom: 2rem;
  @media (min-width: ${theme.screen.size.medium}) {
    margin: 0 auto;
    margin-top: 3rem;
  }
  @media (min-width: ${theme.screen.size.large}) {
    padding-right: 5rem;
  }
`;

export const SubTitle = styled.h2`
  font-size: ${theme.fonts.size.bigger};
  margin-bottom: 3.5rem;

  @media (min-width: ${theme.screen.size.medium}) {
    font-size: ${theme.fonts.size.large};
  } ;
`;

export const Paragraph = styled.p`
  white-space: pre-line;
  color: ${theme.colors.aboutTextColor};
  font-size: ${theme.fonts.size.xSmall};
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
`;

export const DefaultText = styled.h1`
  color: ${theme.colors.grayColor};
  padding-top: 10rem;
  text-align: center;
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  color: white;
  cursor: pointer;
`;
