import Link from 'next/link';

import styled from 'styled-components';

export const NavSectionSocialMediaContainer = styled.span``;

export const NavSectionSocialMediaList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.gaps.medium};
`;

export const NavSectionSocialMediaListItem = styled.li`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.cyan_400};
  background: ${({ theme }) => theme.colors.blue_50};
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ${({ theme }) => theme.transition.default};
  :hover {
    background: ${({ theme }) => theme.colors.blue_100};
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const NavSectionSocialMediaLink = styled(Link)``;
