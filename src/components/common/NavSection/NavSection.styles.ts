import styled from 'styled-components';

export const NavSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.gaps.large};
`;

export const NavSectionContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.gaps.xxlarge};
  align-items: baseline;
`;
