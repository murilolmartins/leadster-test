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
  @media (min-width: 425px) {
    max-width: 420px;
  }
  @media (min-width: 768px) {
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
  gap: ${({ theme }) => theme.gaps.small};
`;

export const HomeCTAInfoRDImage = styled(Image)`
  height: auto;
  width: auto;
  @media (min-width: 425px) {
    height: 40px;
  }
  @media (min-width: 768px) {
    height: 52px;
  }
`;

export const HomeCTAInfoTagsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.gaps.small};
  @media (min-width: 425px) {
    gap: ${({ theme }) => theme.gaps.xsmall};
  }
`;

export const HomeCTAInfoTagsDivisor = styled.hr`
  height: 15px;
  width: 2px;
  border: 0.5px solid ${({ theme }) => theme.colors.gray_300};
`;
