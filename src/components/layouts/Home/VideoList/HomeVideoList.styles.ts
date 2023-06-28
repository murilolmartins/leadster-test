import styled from 'styled-components';

export const HomeVideoListContainer = styled.div`
  width: 100%;
  max-width: 1300px;
`;

export const HomeVideoListSearchOptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  flex-wrap: wrap;
  gap: 20px;
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  height: 500px;
  width: 100%;
`;
