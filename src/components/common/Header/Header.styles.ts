import Image from 'next/image';

import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  background-color: ${({ theme }) => theme.colors.white};
  @media (min-width: 1024px) {
    padding: 40px 0px;
  }
`;

export const HeaderLogo = styled(Image)`
  width: 100px;
  height: 25px;
  @media (min-width: 1024px) {
    width: 220px;
    height: 50px;
  }
`;
