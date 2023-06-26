import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  justify-content: center;
  display: flex;
  padding: 20px 40px;
  border-top: 0.5px solid ${({ theme }) => theme.colors.gray_100};
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    padding: 20px 150px;
  }
`;

export const FooterItemsContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1300px;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: ${({ theme }) => theme.gaps.large};
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop_l}) {
    justify-content: space-between;
  }
`;
