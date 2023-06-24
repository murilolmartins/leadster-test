import styled from 'styled-components';

export const HomeBannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: max-content;
`;

export const HomeBannerTitle = styled.h1``;

export const HomeBannerTag = styled.div`
  padding: 2px 15px;
  border-radius: 15px 15px 15px 0px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  display: flex;
`;

export const HomeBannerTagText = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

export const HomeBannerDivisor = styled.hr`
  width: 110%;
  border: 0.5px solid ${({ theme }) => theme.colors.gray_100};
  margin-top: 15px;
`;

export const HomeBannerDescription = styled.p`
  width: 266px;
  text-align: center;
  padding-top: 10px;
  @media (min-width: 425px) {
    width: 300px;
  }
  @media (min-width: 768px) {
    width: 100%;
  }
`;
