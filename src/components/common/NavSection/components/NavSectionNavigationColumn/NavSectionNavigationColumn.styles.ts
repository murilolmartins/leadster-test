import Link from 'next/link';

import styled from 'styled-components';

export const NavSectionNavigationColumnContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  gap: ${({ theme }) => theme.gaps.large};
`;

export const NavSectionNavigationColumnTitle = styled.h3`
  color: ${({ theme }) => theme.colors.gray_300};
  font-weight: ${({ theme }) => theme.font.weight.extraBold};
`;

export const NavSectionNavigationColumnLinksContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gaps.medium};
`;

export const NavSectionNavigationColumnLinkContainer = styled.li`
  list-style: none;
`;

export const NavSectionNavigationColumnLink = styled(Link)`
  color: ${({ theme }) => theme.colors.gray_200};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  :hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
