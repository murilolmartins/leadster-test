import styled from 'styled-components';

interface PageSectionContainerProps {
  backgroundColor?: string;
}

export const PageSectionContainer = styled.section<PageSectionContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 24px;
  background: ${({ backgroundColor, theme }) =>
    backgroundColor ?? theme.colors.white};
  @media (min-width: 425px) {
    padding: 80px 40px;
  }
  @media (min-width: 1024px) {
    padding: 120px 150px;
  }
  @media only screen and (min-width: 1824px) {
    padding-left: 200px;
    padding-right: 200px;
  }
`;
