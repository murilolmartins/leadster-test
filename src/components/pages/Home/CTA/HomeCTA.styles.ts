import styled from 'styled-components';

export const HomeCTAContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.gaps.medium};
  width: 100%;
  @media (min-width: 768px) {
    gap: ${({ theme }) => theme.gaps.large};
  }
`;
