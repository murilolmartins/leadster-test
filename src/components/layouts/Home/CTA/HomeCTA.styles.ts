import styled from 'styled-components';

export const HomeCTAContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.gaps.medium};
  width: 100%;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: ${({ theme }) => theme.gaps.large};
  }
`;
