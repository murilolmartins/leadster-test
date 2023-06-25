import Image from 'next/image';

import styled from 'styled-components';

export const HomeCTAInfoTagContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.gaps.small};
`;

export const HomeCTAInfoTagImage = styled(Image)`
  width: auto;
  height: 13px;
  @media (min-width: 768px) {
    height: 15px;
  }
`;

export const HomeCTAInfoTagText = styled.span``;
