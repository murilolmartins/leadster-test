import Image from 'next/image';

import styled from 'styled-components';

export const NavSectionHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gaps.small};
`;

export const NavSectionHeaderImageContainer = styled.div``;

export const NavSectionHeaderLogo = styled(Image)`
  width: 200px;
  height: auto;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 250px;
  }
`;

export const NavSectionHeaderImageText = styled.p`
  color: ${({ theme }) => theme.colors.gray_200};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
`;
