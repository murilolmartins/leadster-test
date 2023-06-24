import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  background-color: ${({ theme }) => theme.colors.white};
`;
