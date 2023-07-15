import styled from 'styled-components';

export const VideoModalContentContainer = styled.div`
  border-radius: 15px;
  border-top: 4px solid ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  max-width: 800px;
  background-color: ${({ theme }) => theme.colors.white};
`;
