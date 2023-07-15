import styled from 'styled-components';

export const VideoModalHeaderContainer = styled.header`
  padding: 30px 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.gaps.small};
  width: 100%;
  max-width: 425px;
  align-self: center;
`;

export const VideoModalSubtitle = styled.span`
  font-size: ${({ theme }) => theme.font.sizes.xxlarge};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
`;

export const VideoModalTitle = styled.h2`
  font-size: ${({ theme }) => theme.font.sizes.xxlarge};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  color: ${({ theme }) => theme.colors.black};
  line-height: initial;
`;
