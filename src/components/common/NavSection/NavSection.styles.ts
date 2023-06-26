import styled from 'styled-components';

export const NavSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.gaps.large};
  width: 100%;
  max-width: 1300px;
`;

export const NavSectionContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.gaps.large};
  align-items: baseline;
  width: 100%;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-wrap: wrap;
    flex-direction: row;
  }
`;
