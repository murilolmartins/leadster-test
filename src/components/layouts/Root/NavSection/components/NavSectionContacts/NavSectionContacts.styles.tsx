import styled from 'styled-components';

export const NavSectionContactsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
`;

export const NavSectionContactsList = styled.ul``;

export const NavSectionContactsItem = styled.li`
  list-style: none;
  display: flex;
  gap: ${({ theme }) => theme.gaps.small};
`;

export const NavSectionContactLabel = styled.p``;

export const NavSectionContactText = styled.p`
  color: ${({ theme }) => theme.colors.gray_200};
`;
