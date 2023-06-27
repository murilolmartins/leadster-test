import styled from 'styled-components';

export const VideoListOrderSelectContainer = styled.div`
  display: flex;
  align-items: baseline;
  gap: ${({ theme }) => theme.gaps.xsmall};
`;

export const VideoListOrderSelectText = styled.label`
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;
