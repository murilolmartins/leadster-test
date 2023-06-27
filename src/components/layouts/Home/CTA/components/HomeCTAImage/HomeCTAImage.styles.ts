import Image from 'next/image';

import styled from 'styled-components';

export const HomeCTAImageContainer = styled.div`
  width: 100%;
  max-width: 300px;
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile_xl}) {
    max-width: 420px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 650px;
  }
`;

export const HomeCTAImage = styled(Image)`
  width: 100%;
  height: auto;
`;
