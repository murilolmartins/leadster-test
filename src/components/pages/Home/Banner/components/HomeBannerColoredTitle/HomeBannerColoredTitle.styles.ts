import Image from 'next/image';

import styled from 'styled-components';

export const HomeBannerColoredTitleContainer = styled.div`
  position: relative;
`;

export const HomeBannerColoredTitleText = styled.h1`
  background: ${({ theme }) => theme.colors.gradient.mainTheme};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: ${({ theme }) => theme.font.sizes.xhuge};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  @media (min-width: 425px) {
    font-size: ${({ theme }) => theme.font.sizes.xxhuge};
  }
  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.font.sizes.xxmega};
  }
`;

export const HomeBannerColoredTitleColoredImageContainer = styled.div`
  position: absolute;
  top: 2px;
  right: -10px;
  @media (min-width: 768px) {
    top: 11px;
    right: -15px;
  }
`;

export const HomeBannerColoredTitleColoredImage = styled(Image)`
  height: 15px;
  width: 20px;
  @media (min-width: 768px) {
    height: 35px;
    width: 50px;
  }
`;
