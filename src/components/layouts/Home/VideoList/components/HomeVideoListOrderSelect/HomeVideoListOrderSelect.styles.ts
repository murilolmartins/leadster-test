import styled from 'styled-components';

export const HomeVideoListOrderSelectContainer = styled.div`
  display: flex;
  align-items: baseline;
  gap: ${({ theme }) => theme.gaps.xsmall};
`;

export const HomeVideoListOrderSelectText = styled.label`
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;
