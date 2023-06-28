import styled from 'styled-components';

export const HomeBannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 60px 0px;
`;

export const HomeBannerTitle = styled.p`
  font-size: ${({ theme }) => theme.font.sizes.xxlarge};
  font-weight: ${({ theme }) => theme.font.weight.normal};
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile_xl}) {
    font-size: ${({ theme }) => theme.font.sizes.huge};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.font.sizes.xxxhuge};
  }
`;

export const HomeBannerTag = styled.div`
  padding: 2px 15px;
  border-radius: 15px 15px 15px 0px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  display: flex;
`;

export const HomeBannerTagText = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
`;

export const HomeBannerDivisor = styled.hr`
  width: 100%;
  max-width: 300px;
  border: 0.5px solid ${({ theme }) => theme.colors.gray_100};
  margin-top: 15px;
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile_xl}) {
    max-width: 400px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 750px;
  }
`;

export const HomeBannerDescription = styled.p`
  width: 266px;
  text-align: center;
  padding-top: 10px;
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile_xl}) {
    width: 300px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
  }
`;
