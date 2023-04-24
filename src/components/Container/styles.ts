import styled, { css, DefaultTheme } from 'styled-components';

export type ContainerStyleProps = {
  background?: 'white' | 'gray' | 'dark';
  height: 'full' | '100';
};

const backGround = {
  white: (theme: DefaultTheme) => css`
    background-color: ${theme.background.white};
    color: ${theme.colors.blackColor};
  `,
  gray: (theme: DefaultTheme) => css`
    background-color: ${theme.background.gray};
    color: ${theme.colors.whiteColor};
  `,

  dark: (theme: DefaultTheme) => css`
    background-color: ${theme.background.dark};
    color: ${theme.colors.whiteColor};
  `,
};

export const Container = styled.div<ContainerStyleProps>`
  ${({ theme, background, height }) => css`
    display: block;
    margin: 0 auto;
    padding: 0 1rem;
    min-height: ${height == 'full' ? '100vh' : '100%'};
    width: ${theme.screen.size.xSmall};
    @media (min-width: ${theme.screen.size.small}) {
      width: ${theme.screen.size.small};
    }
    @media (min-width: ${theme.screen.size.medium}) {
      width: ${theme.screen.size.medium};
    }
    @media (min-width: ${theme.screen.size.large}) {
      width: ${theme.screen.size.large};
    }
    ${background ? backGround[background](theme) : null}
    border-left: 1px solid ${theme.colors.grayColor};
    border-right: 1px solid ${theme.colors.grayColor};
  `}
`;
