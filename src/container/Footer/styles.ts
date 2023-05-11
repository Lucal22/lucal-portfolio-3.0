import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 6vh;
    text-align: center;
    p {
      font-size: ${theme.fonts.size.small};
      color: ${theme.colors.aboutTextColor};
    }
    a {
      color: ${theme.colors.lightGrayColor};
    }
    @media (min-width: ${theme.screen.size.large}) {
      margin: 0;
    }
  `}
`;

export const Content = styled.div`
  padding-top: 15rem;
  padding-bottom: 1rem;
`;
