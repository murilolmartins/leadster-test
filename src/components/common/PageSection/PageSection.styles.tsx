import styled from 'styled-components';

interface PageSectionContainerProps {
  backgroundColor?: string;
}

export const PageSectionContainer = styled.section<PageSectionContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 88px 24px;
  background: ${({ backgroundColor, theme }) =>
    backgroundColor ?? theme.colors.white};
  @media (min-width: 1024px) {
    padding: 160px 200px;
  }
  @media only screen and (min-width: 1824px) {
    padding-left: 270px;
    padding-right: 270px;
  }
`;
