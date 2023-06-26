import Link from 'next/link';

import styled from 'styled-components';

export const FooterItemContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: ${({ theme }) => theme.gaps.small};
`;

export const FooterItemText = styled.p`
  color: ${({ theme }) => theme.colors.gray_200};
`;

export const FooterItemLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
`;

export const FooterItemDivisor = styled.hr`
  height: 15px;
  width: 2px;
  border: 0.5px solid ${({ theme }) => theme.colors.gray_200};
`;
