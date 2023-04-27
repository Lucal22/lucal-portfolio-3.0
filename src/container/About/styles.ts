import styled from 'styled-components';
import { theme } from '../../styles/theme';

export type AboutStyleProps = {
  click: boolean;
};

export const Container = styled.div`
  width: 100%;
  height: 100%;
  font-family: ${theme.fonts.style.titleFont};
`;

export const Content = styled.div`
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
    grid-template-areas:
      'i2 i1'
      'i2 i3';
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 30rem auto;
  }

  @media (min-width: ${theme.screen.size.xLarge}) {
    grid-template-rows: 42rem auto;
  } ;
`;

export const Figure = styled.div`
  grid-area: i1;
  width: 30rem;
  height: 100%;
  margin: 0 auto;
  img {
    border-radius: 1rem;
    filter: grayscale(90%);
  }
  @media (min-width: ${theme.screen.size.medium}) {
    margin: 0;
  }
  @media (min-width: ${theme.screen.size.large}) {
    width: auto;
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
  grid-area: i2;
  margin-top: 4rem;
  margin-bottom: 2rem;
  @media (min-width: ${theme.screen.size.medium}) {
    margin: 0 auto;
    margin-top: 3rem;
  }
  @media (min-width: ${theme.screen.size.large}) {
    padding-right: 10rem;
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
