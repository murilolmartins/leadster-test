import Image from 'next/image';

import styled from 'styled-components';

export const InfoTagContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: ${({ theme }) => theme.gaps.small};
`;

export const InfoTagImage = styled(Image)`
  width: auto;
  height: 11px;
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile_xl}) {
    height: 13px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 17px;
  }
`;

export const InfoTagText = styled.p``;
