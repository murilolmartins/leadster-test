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
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile_xl}) {
    font-size: ${({ theme }) => theme.font.sizes.xxhuge};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.font.sizes.xxmega};
  }
`;

export const HomeBannerColoredTitleColoredImageContainer = styled.div`
  position: absolute;
  top: 7px;
  right: -6px;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    top: 15px;
    right: -19px;
  }
`;

export const HomeBannerColoredTitleColoredImage = styled(Image)`
  height: auto;
  width: 20px;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 50px;
  }
`;
