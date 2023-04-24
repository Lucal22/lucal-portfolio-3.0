import styled, { css } from 'styled-components';

export const Header = styled.header`
  ${({ theme }) => css`
    display: block;
    width: 100%;
    height: 8rem;
    position: fixed;
    z-index: 1;
    color: ${theme.colors.whiteColor};
  `}
`;
