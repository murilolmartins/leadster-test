import Image from 'next/image';

import styled from 'styled-components';

export const HomeCTAInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  flex-direction: column;
  gap: ${({ theme }) => theme.gaps.medium};
`;

export const HomeCTAInfoTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  flex-direction: column;
  gap: ${({ theme }) => theme.gaps.small};
  max-width: 300px;
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile_xl}) {
    max-width: 420px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 600px;
  }
`;

export const HomeCTAInfoTitle = styled.h1`
  width: 100%;
`;

export const HomeCTAInfoSubtitle = styled.h2``;

export const HomeCTAInfoDivisor = styled.hr`
  width: 100%;
  border: 0.5px solid ${({ theme }) => theme.colors.gray_100};
`;

export const HomeCTAInfoButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.gaps.medium};
`;

export const HomeCTAInfoRDImage = styled(Image)`
  height: 40px;
  width: auto;
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile_xl}) {
    height: 40px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 52px;
  }
`;

export const HomeCTAInfoTagsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.gaps.small};
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile_xl}) {
    gap: ${({ theme }) => theme.gaps.xsmall};
  }
`;

export const HomeCTAInfoTagsDivisor = styled.hr`
  width: 2px;
  border: 0.5px solid ${({ theme }) => theme.colors.gray_300};
`;
